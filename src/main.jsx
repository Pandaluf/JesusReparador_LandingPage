import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom'; // 👈 Usa HashRouter en lugar de BrowserRouter

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>
);
