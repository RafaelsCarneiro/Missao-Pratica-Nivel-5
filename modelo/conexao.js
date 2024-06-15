const mongoose = require('mongoose');

const options = {
  
};

mongoose.connect('mongodb://localhost:27017/livraria', options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', function() {
  console.log('Conectado ao MongoDB com sucesso!');
});

module.exports = mongoose;
