import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
function ContentView() {
    const [count, setCount] = useState(0);
    return (_jsx("div", { style: { minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 }, children: [_jsx("span", { children: "Hello, SwiftUI!" }), _jsxs("button", { type: "button", onClick: () => setCount(c => c + 1), style: { border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }, children: ["Count: ", count] })] }) }));
}
export default ContentView;
