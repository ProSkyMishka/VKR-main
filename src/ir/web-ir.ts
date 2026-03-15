export interface ReactSkeletonComponent {
  viewName: string;
  propsInterface: string;
  stateHooks: string[];
  bindingProps: string[];
  jsxSkeleton: string;
  imports: string[];
  leadingBodySwift?: string;
}

export interface UnresolvedFragment {
  viewName: string;
  location: string;
  description: string;
  rawSwift?: string;
}

export interface WebIR {
  skeleton: ReactSkeletonComponent[];
  unresolved: UnresolvedFragment[];
  entryViewName: string;
}
