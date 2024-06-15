// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Livros</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Lista de Livros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dados">Dados do Livro</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<LivroLista />} />
                    <Route path="/dados" element={<LivroDados />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
