var express = require('express');
var router = express.Router();
var { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.status(201).json({ message: 'Livro incluído com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para excluir um livro pelo código (_id)
router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    await excluir(codigo);
    res.json({ message: 'Livro excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
