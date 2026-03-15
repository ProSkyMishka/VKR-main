import type { UIIR } from '../ir/types.js';
import type { WebIR } from '../ir/web-ir.js';

export interface ConversionReport {
  meta: {
    inputFile: string;
    outDir: string;
    startedAt: string;
    finishedAt: string;
    success: boolean;
    errors?: string[];
    totalLlmCalls?: number;
    totalPromptTokens?: number;
    totalCompletionTokens?: number;
    totalTokens?: number;
    experimentConfig?: string;
  };
  step1_extractor: {
    step: string;
    ir: UIIR;
    viewsCount: number;
    viewNames: string[];
    entryViewName: string | null;
    swiftSourcePreview?: string;
  };
  step2_rules: {
    step: string;
    webIR: WebIR;
    skeletonCount: number;
    unresolvedCount: number;
    unresolvedList: { viewName: string; location: string; description: string; rawSwift?: string }[];
  };
  step3_rag: {
    step: string;
    retrievedCount: number;
    retrievedIds: string[];
    retrievedTags: (string[] | undefined)[];
    ragContextLength: number;
  };
  step4_llm: {
    step: string;
    model?: string;
    promptLength: number;
    rawResponseLength: number;
    filesGenerated: { path: string; contentLength: number }[];
    filesCount: number;
  };
  step5_validation: {
    step: string;
    success: boolean;
    buildOk: boolean;
    buildError?: string;
    testOk?: boolean;
    testError?: string;
  };
  step6_repair: {
    step: string;
    totalIterations: number;
    iterations: {
      iteration: number;
      validationError: string;
      filesPatched: number;
      successAfter: boolean;
    }[];
    limitReached: boolean;
  };
}
