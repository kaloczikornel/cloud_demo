import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Vite from "./Vite.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Vite />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
