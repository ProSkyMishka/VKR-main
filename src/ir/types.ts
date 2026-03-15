export interface ParamDef {
  name: string;
  type: string;
}

export interface StateVarDef {
  name: string;
  type: string;
  initial?: string;
}

export interface BindingDef {
  name: string;
  type: string;
}

export interface ViewState {
  stateVars: StateVarDef[];
  bindings: BindingDef[];
}

export interface ModifierDef {
  name: string;
  args?: string[] | Record<string, unknown>;
}

export interface ComponentNode {
  type: string;
  props: Record<string, unknown>;
  children: ComponentNode[];
  modifiers?: ModifierDef[];
}

export interface ViewDefinition {
  name: string;
  params: ParamDef[];
  state: ViewState;
  body: ComponentNode;
  leadingBodySwift?: string;
}

export interface UIIR {
  views: ViewDefinition[];
  entryViewName: string | null;
}
