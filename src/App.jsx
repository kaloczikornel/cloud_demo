import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Vite from "./Vite.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Vite />} />
                <Route exact path="/demo" element={<div>Hello Cloud Demo</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
