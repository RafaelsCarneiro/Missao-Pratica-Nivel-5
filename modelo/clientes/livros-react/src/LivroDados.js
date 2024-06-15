// LivroDados.js

import React, { useState } from 'react';
import { ControleLivros } from './controle/Livros';
import { navigate } from 'gatsby';

const controleLivros = new ControleLivros();

function LivroDados() {
    const [livro, setLivro] = useState({
        codigo: '',
        codEditora: 0,
        titulo: '',
        resumo: '',
        autores: []
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLivro({ ...livro, [name]: value });
    }

    async function handleIncluir() {
        try {
            const sucesso = await controleLivros.incluir(livro);
            if (sucesso) {
                navigate('/');
            } else {
                console.error('Erro ao incluir livro');
            }
        } catch (error) {
            console.error('Erro ao incluir livro:', error);
        }
    }

    return (
        <div>
            <input type="text" name="titulo" value={livro.titulo} onChange={handleInputChange} />
            {/* Adicione outros campos de entrada conforme necessário */}
            <button onClick={handleIncluir}>Incluir Livro</button>
        </div>
    );
}

export default LivroDados;
