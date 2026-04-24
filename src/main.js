import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(_jsx(App, {}));
}
