// LivroLista.js

import React, { useState, useEffect } from 'react';
import { ControleLivros } from './controle/Livros';

const controleLivros = new ControleLivros();

function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        async function carregarLivros() {
            try {
                const livrosObtidos = await controleLivros.obterLivros();
                setLivros(livrosObtidos);
            } catch (error) {
                console.error('Erro ao carregar livros:', error);
            } finally {
                setCarregado(true);
            }
        }
        carregarLivros();
    }, []);

    async function handleExcluir(codigoLivro) {
        try {
            const sucesso = await controleLivros.excluir(codigoLivro);
            if (sucesso) {
                setLivros(livros.filter(livro => livro.codigo !== codigoLivro));
            } else {
                console.error('Erro ao excluir livro');
            }
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
        } finally {
            setCarregado(false);
        }
    }

    return (
        <div>
            {carregado ? (
                <ul>
                    {livros.map((livro, index) => (
                        <li key={index}>
                            {livro.titulo} - {livro.autores.join(', ')}
                            <button onClick={() => handleExcluir(livro.codigo)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carregando livros...</p>
            )}
        </div>
    );
}

export default LivroLista;
