export function resolveEntryFromSource(swiftSource: string, viewNames: string[]): string | null {
  if (viewNames.length === 0) return null;
  const m = swiftSource.match(/WindowGroup\s*\{\s*(\w+)\s*\(\s*\)/);
  if (m && viewNames.includes(m[1])) return m[1];
  return null;
}

export function resolveEntry(viewNames: string[]): string | null {
  if (viewNames.length === 0) return null;
  if (viewNames.includes('ContentView')) return 'ContentView';
  if (viewNames.includes('RootView')) return 'RootView';
  return viewNames[0] ?? null;
}
