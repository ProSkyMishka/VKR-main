import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ContentView = () => {
    const [count, setCount] = useState(0);
    return (_jsx("div", { style: { minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: _jsxs("div", { style: { position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: [_jsx("div", { style: { position: 'absolute', inset: 0, backgroundColor: '#8B4513', zIndex: 0 } }), _jsx("div", { style: { position: 'relative', zIndex: 1 }, children: _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 }, children: [_jsx("span", { children: "Hello, SwiftUI!" }), _jsxs("button", { type: "button", onClick: () => setCount(c => c + 1), style: { border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }, children: ["Count: ", count] })] }) })] }) }));
};
export default ContentView;
