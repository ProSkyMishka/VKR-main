import fs from 'fs/promises';
import path from 'path';
import { buildReportMarkdown } from './buildMarkdown.js';
import type { ConversionReport } from './types.js';

const REPORT_MD = 'conversion-report.md';
const REPORT_JSON = 'conversion-report.json';

export async function writeReport(
  outDir: string,
  report: ConversionReport
): Promise<{ mdPath: string; jsonPath: string }> {
  const mdPath = path.join(outDir, REPORT_MD);
  const jsonPath = path.join(outDir, REPORT_JSON);
  await fs.writeFile(mdPath, buildReportMarkdown(report), 'utf-8');
  await fs.writeFile(jsonPath, JSON.stringify(report, null, 2), 'utf-8');
  return { mdPath, jsonPath };
}

export { buildReportMarkdown } from './buildMarkdown.js';
export type { ConversionReport } from './types.js';
