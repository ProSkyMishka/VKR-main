import type { ViewDefinition, ViewState, ParamDef, StateVarDef, BindingDef } from '../ir/types.js';
import type { RawViewStruct, RawProp } from './parseSwift.js';
import { extractViewStructs } from './parseSwift.js';
import { bodyToComponentTree } from './bodyToIR.js';
import { resolveEntry, resolveEntryFromSource } from '../entry.js';
import type { UIIR } from '../ir/types.js';

function rawPropsToStateModel(raw: RawViewStruct): ViewState {
  const stateVars: StateVarDef[] = raw.props
    .filter((p: RawProp) => p.kind === '@State')
    .map((p: RawProp) => ({
      name: p.name,
      type: p.type ?? 'Unknown',
      initial: p.initial,
    }));
  const bindings: BindingDef[] = raw.props
    .filter((p: RawProp) => p.kind === '@Binding')
    .map((p: RawProp) => ({ name: p.name, type: p.type ?? 'Unknown' }));
  return { stateVars, bindings };
}

function rawViewToDefinition(raw: RawViewStruct): ViewDefinition {
  const bodyResult = bodyToComponentTree(raw.bodySource);
  const state = rawPropsToStateModel(raw);
  const params: ParamDef[] = raw.props
    .filter((p: RawProp) => p.kind === 'let')
    .map((p: RawProp) => ({ name: p.name, type: p.type ?? 'Unknown' }));
  return {
    name: raw.name,
    params,
    body: bodyResult.root,
    state,
    leadingBodySwift: bodyResult.leadingSwift,
  };
}

export function extract(swiftSource: string): UIIR {
  const rawStructs = extractViewStructs(swiftSource);
  const views = rawStructs.map(rawViewToDefinition);
  const viewNames = views.map((v) => v.name);
  const entryViewName =
    views.length > 0
      ? resolveEntryFromSource(swiftSource, viewNames) ?? resolveEntry(viewNames)
      : null;
  return {
    views,
    entryViewName,
  };
}

export { extractViewStructs } from './parseSwift.js';
export { bodyToComponentTree } from './bodyToIR.js';
export type { BodyParseResult } from './bodyToIR.js';
