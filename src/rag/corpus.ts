export interface RagEntry {
  id: string;
  tags: string[];
  swiftui_snippet: string;
  react_snippet: string;
  notes: string;
}

export const RAG_CORPUS: RagEntry[] = [
  {
    id: 's1-vstack-text',
    tags: ['layout', 'VStack', 'Text', 'S1'],
    swiftui_snippet: `VStack {
  Text("Hello")
  Text("World")
}.padding()`,
    react_snippet: `<div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16 }}>
  <span>Hello</span>
  <span>World</span>
</div>`,
    notes: 'VStack → flex column; Text → span; .padding() → padding in style.',
  },
  {
    id: 's1-hstack',
    tags: ['layout', 'HStack', 'Text', 'S1'],
    swiftui_snippet: `HStack(spacing: 12) {
  Text("A")
  Text("B")
  Text("C")
}`,
    react_snippet: `<div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</div>`,
    notes: 'HStack(spacing:) → flex row with gap.',
  },
  {
    id: 's1-zstack-color',
    tags: ['layout', 'ZStack', 'Color', 'Text', 'S1'],
    swiftui_snippet: `ZStack {
  Color.blue.ignoresSafeArea()
  Text("Overlay")
}`,
    react_snippet: `<div style={{ position: 'relative', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0000FF', zIndex: 0 }} />
  <div style={{ position: 'relative', zIndex: 1 }}><span>Overlay</span></div>
</div>`,
    notes: 'ZStack: first child bottom (zIndex 0), last top; Color → background div.',
  },
  {
    id: 's1-padding',
    tags: ['layout', 'padding', 'VStack', 'S1'],
    swiftui_snippet: `VStack { Text("Hi") }.padding(20)`,
    react_snippet: `<div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 20 }}>
  <span>Hi</span>
</div>`,
    notes: '.padding(20) → style: { padding: 20 }.',
  },
  {
    id: 's1-frame',
    tags: ['layout', 'frame', 'Text', 'S1'],
    swiftui_snippet: `Text("Box").frame(width: 200, height: 100).background(Color.blue.opacity(0.2))`,
    react_snippet: `<div style={{ width: 200, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,255,0.2)' }}>
  <span>Box</span>
</div>`,
    notes: 'In SwiftUI .frame(width:height:) centers content by default. Use a wrapper div with width, height, display: flex, alignItems: center, justifyContent: center; put background on the wrapper.',
  },
  {
    id: 's1-centered-box',
    tags: ['layout', 'VStack', 'Spacer', 'Text', 'padding', 'background', 'S1'],
    swiftui_snippet: `VStack {
  Spacer()
  Text("Center").padding(24).background(Color.orange.opacity(0.3)).cornerRadius(8)
  Spacer()
}`,
    react_snippet: `<div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', height: '100vh' }}>
  <div style={{ flex: 1, minWidth: 0, minHeight: 0 }} />
  <div style={{ padding: 24, backgroundColor: 'rgba(255,165,0,0.3)', borderRadius: 8 }}>Center</div>
  <div style={{ flex: 1, minWidth: 0, minHeight: 0 }} />
</div>`,
    notes: 'Spacer() → div with flex: 1. The content box must stay content-sized: use alignItems: center on VStack so the middle element does not stretch to full width; the orange box is only as wide as its content + padding.',
  },
  {
    id: 's1-font',
    tags: ['layout', 'font', 'Text', 'S1'],
    swiftui_snippet: `Text("Title").font(.title).bold()`,
    react_snippet: `<span style={{ fontSize: 28, fontWeight: 'bold' }}>Title</span>`,
    notes: '.font(.title).bold() → fontSize and fontWeight.',
  },
  {
    id: 's1-foregroundColor',
    tags: ['layout', 'foregroundColor', 'Text', 'S1'],
    swiftui_snippet: `Text("Red").foregroundColor(.red)`,
    react_snippet: `<span style={{ color: '#FF0000' }}>Red</span>`,
    notes: '.foregroundColor(.red) → color in style.',
  },
  {
    id: 's1-background',
    tags: ['layout', 'background', 'Text', 'S1'],
    swiftui_snippet: `Text("Label").padding(8).background(Color.gray.opacity(0.3))`,
    react_snippet: `<span style={{ padding: 8, backgroundColor: 'rgba(128,128,128,0.3)' }}>Label</span>`,
    notes: '.background(Color) → backgroundColor.',
  },
  {
    id: 's1-image',
    tags: ['layout', 'Image', 'S1'],
    swiftui_snippet: `Image("logo").resizable().scaledToFit()`,
    react_snippet: `<img src="/logo.png" alt="" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />`,
    notes: 'Image(name) → img with src; resizable/scaledToFit → objectFit.',
  },
  {
    id: 's1-spacing',
    tags: ['layout', 'VStack', 'spacing', 'S1'],
    swiftui_snippet: `VStack(spacing: 24) {
  Text("One")
  Text("Two")
}`,
    react_snippet: `<div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
  <span>One</span>
  <span>Two</span>
</div>`,
    notes: 'VStack(spacing:) → gap in flex.',
  },
  {
    id: 's2-state-button',
    tags: ['state', 'Button', '@State', 'S2'],
    swiftui_snippet: `@State private var count = 0
Button("Tap") { count += 1 }
Text("\\(count)")`,
    react_snippet: `const [count, setCount] = useState(0);
<button onClick={() => setCount((c) => c + 1)}>Tap</button>
<span>{count}</span>`,
    notes: '@State → useState; Button action → onClick with setState.',
  },
  {
    id: 's2-toggle',
    tags: ['state', 'Toggle', '@State', 'S2'],
    swiftui_snippet: `@State private var isOn = false
Toggle("Enable", isOn: $isOn)`,
    react_snippet: `const [isOn, setIsOn] = useState(false);
<label><input type="checkbox" checked={isOn} onChange={(e) => setIsOn(e.target.checked)} />Enable</label>`,
    notes: 'Toggle(isOn: $x) → checkbox with checked and onChange.',
  },
  {
    id: 's2-textfield',
    tags: ['state', 'TextField', '@State', 'S2'],
    swiftui_snippet: `@State private var name = ""
TextField("Name", text: $name)`,
    react_snippet: `const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />`,
    notes: 'TextField(text: $x) → controlled input with value and onChange.',
  },
  {
    id: 's2-button-action',
    tags: ['state', 'Button', 'S2'],
    swiftui_snippet: `Button("Submit") {
  performAction()
}`,
    react_snippet: `<button type="button" onClick={() => performAction()}>Submit</button>`,
    notes: 'Button label + closure → onClick handler.',
  },
  {
    id: 's2-onAppear',
    tags: ['state', 'onAppear', 'S2'],
    swiftui_snippet: `Text("Hi").onAppear { loadData() }`,
    react_snippet: `useEffect(() => { loadData(); }, []);`,
    notes: '.onAppear { } → useEffect with empty deps.',
  },
  {
    id: 's2-multiple-state',
    tags: ['state', '@State', 'S2'],
    swiftui_snippet: `@State private var a = 0
@State private var b = ""
@State private var flag = false`,
    react_snippet: `const [a, setA] = useState(0);
const [b, setB] = useState('');
const [flag, setFlag] = useState(false);`,
    notes: 'Each @State → separate useState.',
  },
  {
    id: 's3-binding-child',
    tags: ['@Binding', 'state', 'S3'],
    swiftui_snippet: `struct Child: View {
  @Binding var isOn: Bool
  var body: some View { Toggle("", isOn: $isOn) }
}`,
    react_snippet: `interface ChildProps { isOn: boolean; onIsOnChange?: (v: boolean) => void }
const Child: React.FC<ChildProps> = ({ isOn, onIsOnChange }) => (
  <input type="checkbox" checked={isOn} onChange={(e) => onIsOnChange?.(e.target.checked)} />
);`,
    notes: '@Binding → value + onXxxChange callback in props.',
  },
  {
    id: 's3-binding-parent',
    tags: ['@Binding', 'state', 'S3'],
    swiftui_snippet: `@State private var selected = false
ChildView(isOn: $selected)`,
    react_snippet: `const [selected, setSelected] = useState(false);
<ChildView isOn={selected} onIsOnChange={setSelected} />`,
    notes: 'Parent passes state value and setter as binding.',
  },
  {
    id: 's3-binding-string',
    tags: ['@Binding', 'S3'],
    swiftui_snippet: `@Binding var text: String`,
    react_snippet: `interface Props { text: string; onTextChange?: (v: string) => void }`,
    notes: '@Binding var text → text + onTextChange in props.',
  },
  {
    id: 's4-list-foreach',
    tags: ['list', 'ForEach', 'S4'],
    swiftui_snippet: `List(items) { item in
  Text(item.name)
}`,
    react_snippet: `<ul>{items.map((item) => <li key={item.id}><span>{item.name}</span></li>)}</ul>`,
    notes: 'List + ForEach → ul + items.map with key (use item.id or index).',
  },
  {
    id: 's4-foreach-identifiable',
    tags: ['ForEach', 'List', 'S4'],
    swiftui_snippet: `ForEach(items) { item in
  RowView(item: item)
}`,
    react_snippet: `{items.map((item) => <RowView key={item.id} item={item} />)}`,
    notes: 'ForEach with Identifiable → map with key: item.id.',
  },
  {
    id: 's4-foreach-index',
    tags: ['ForEach', 'S4'],
    swiftui_snippet: `ForEach(0..<count, id: \\.self) { i in
  Text("Item \\(i)")
}`,
    react_snippet: `{Array.from({ length: count }, (_, i) => <span key={i}>Item {i}</span>)}`,
    notes: 'ForEach(0..<n, id: \\.self) → Array.from or range map with key: i.',
  },
  {
    id: 's4-list-section',
    tags: ['List', 'Section', 'S4'],
    swiftui_snippet: `List {
  Section("Header") {
    ForEach(items) { Text($0.name) }
  }
}`,
    react_snippet: `<ul>
  <li style={{ listStyle: 'none', fontWeight: 'bold' }}>Header</li>
  {items.map((item) => <li key={item.id}><span>{item.name}</span></li>)}
</ul>`,
    notes: 'Section → list header + items.',
  },
  {
    id: 's5-navigation-view',
    tags: ['NavigationView', 'NavigationStack', 'layout', 'S5'],
    swiftui_snippet: `NavigationView {
  VStack {
    Text("Root")
  }
}`,
    react_snippet: `<div>
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span>Root</span>
  </div>
</div>`,
    notes: 'NavigationView wraps content; use useState for screen stack if needed.',
  },
  {
    id: 's5-navigation-link',
    tags: ['NavigationLink', 'NavigationView', 'S5'],
    swiftui_snippet: `NavigationLink("Go to Detail") {
  DetailView()
}`,
    react_snippet: `// Use state to switch screen: const [screen, setScreen] = useState<'list'|'detail'>('list');
<button type="button" onClick={() => setScreen('detail')}>Go to Detail</button>
{screen === 'detail' && <DetailView />}`,
    notes: 'NavigationLink → button + state to show/hide destination view (no router).',
  },
  {
    id: 's5-nav-title',
    tags: ['navigationTitle', 'S5'],
    swiftui_snippet: `.navigationTitle("My Screen")`,
    react_snippet: `// Render as <h1> or header: <h1 style={{ fontSize: '1.5rem' }}>My Screen</h1>`,
    notes: '.navigationTitle → title in header or h1.',
  },
  {
    id: 's6-animation',
    tags: ['animation', 'S6'],
    swiftui_snippet: `withAnimation(.easeInOut) { isExpanded.toggle() }`,
    react_snippet: `// Toggle state; use CSS transition on the element:
// style={{ transition: 'all 0.3s ease-in-out' }} or className with transition`,
    notes: 'withAnimation → update state; add CSS transition on the React element.',
  },
  {
    id: 's6-opacity',
    tags: ['animation', 'opacity', 'S6'],
    swiftui_snippet: `Text("Hi").opacity(show ? 1 : 0).animation(.easeInOut)`,
    react_snippet: `<span style={{ opacity: show ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>Hi</span>`,
    notes: '.opacity + .animation → inline opacity + CSS transition.',
  },
  {
    id: 's6-offset',
    tags: ['animation', 'offset', 'S6'],
    swiftui_snippet: `Circle().offset(x: drag ? 50 : 0).animation(.spring())`,
    react_snippet: `<div style={{ transform: \`translateX(\${drag ? 50 : 0}px)\`, transition: 'transform 0.35s ease-out' }} />`,
    notes: '.offset + .animation → transform: translateX + CSS transition.',
  },
  {
    id: 's6-scale',
    tags: ['animation', 'scaleEffect', 'S6'],
    swiftui_snippet: `Image("icon").scaleEffect(selected ? 1.2 : 1.0)`,
    react_snippet: `<img src="/icon.png" alt="" style={{ transform: \`scale(\${selected ? 1.2 : 1})\`, transition: 'transform 0.2s' }} />`,
    notes: '.scaleEffect → transform: scale() + transition.',
  },
  {
    id: 'mod-padding-edges',
    tags: ['padding', 'layout'],
    swiftui_snippet: `.padding(.horizontal, 20).padding(.vertical, 10)`,
    react_snippet: `style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}`,
    notes: '.padding(.horizontal, n) → paddingLeft/Right; .vertical → paddingTop/Bottom.',
  },
  {
    id: 'mod-font-size',
    tags: ['font', 'Text'],
    swiftui_snippet: `Text("X").font(.system(size: 24, weight: .bold))`,
    react_snippet: `<span style={{ fontSize: 24, fontWeight: 'bold' }}>X</span>`,
    notes: '.font(.system(size:weight:)) → fontSize and fontWeight.',
  },
  {
    id: 'mod-onTapGesture',
    tags: ['onTapGesture', 'Button'],
    swiftui_snippet: `Text("Tap me").onTapGesture { doSomething() }`,
    react_snippet: `<span onClick={() => doSomething()} style={{ cursor: 'pointer' }}>Tap me</span>`,
    notes: '.onTapGesture → onClick on element; add cursor: pointer.',
  },
  {
    id: 'mod-cornerRadius',
    tags: ['layout', 'cornerRadius', 'clipShape'],
    swiftui_snippet: `Text("Box").padding(12).background(Color.blue).cornerRadius(8)`,
    react_snippet: `<span style={{ padding: 12, backgroundColor: '#0000FF', borderRadius: 8 }}>Box</span>`,
    notes: '.cornerRadius(n) → borderRadius: n.',
  },
  {
    id: 'vstack-text',
    tags: ['layout', 'VStack', 'Text'],
    swiftui_snippet: 'VStack {\n  Text("Hello")\n  Text("World")\n}.padding()',
    react_snippet: "<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>\n  <span>Hello</span>\n  <span>World</span>\n</div>",
    notes: 'VStack maps to flex column; Text to span.',
  },
  {
    id: 'state-button',
    tags: ['state', 'Button', '@State'],
    swiftui_snippet: '@State private var count = 0\nButton("Tap") { count += 1 }',
    react_snippet: 'const [count, setCount] = useState(0);\n<button onClick={() => setCount((c) => c + 1)}>Tap</button>',
    notes: '@State becomes useState; Button action updates state.',
  },
  {
    id: 'binding',
    tags: ['@Binding', 'state'],
    swiftui_snippet: 'struct Child: View {\n  @Binding var isOn: Bool\n  var body: some View { Toggle("", isOn: $isOn) }\n}',
    react_snippet: 'interface ChildProps { isOn: boolean; onIsOnChange?: (v: boolean) => void }\nfunction Child({ isOn, onIsOnChange }: ChildProps) { ... }',
    notes: '@Binding becomes value + onChange callback in props.',
  },
  {
    id: 'list-foreach',
    tags: ['list', 'ForEach'],
    swiftui_snippet: 'List(items) { item in\n  Text(item.name)\n}',
    react_snippet: '<ul>{items.map((item) => <li key={item.id}><span>{item.name}</span></li>)}</ul>',
    notes: 'List+ForEach map to ul + map with key.',
  },
];
