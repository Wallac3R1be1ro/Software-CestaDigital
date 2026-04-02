const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// conexão com banco
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'mercado'
});

app.get('/produto/:codigo', (req, res) => {
  const codigo = req.params.codigo;

  connection.query(
    'SELECT * FROM produtos WHERE cod_produto = ?',
    [codigo],
    (err, results) => {
      if (err) return res.status(500).json(err);

      if (results.length === 0) {
        return res.json({ nome_produto: 'Produto não encontrado' });
      }

      res.json(results[0]);
    }
  );
});
app.get('/produtos', (req, res) => {
  connection.query(
    'SELECT * FROM produtos',
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
});
app.post('/produtos', (req, res) => {
  const { nome_produto, valor_produto, marca_produto } = req.body;

  connection.query(
    'INSERT INTO produtos (nome_produto, valor_produto, marca_produto) VALUES (?, ?, ?)',
    [nome_produto, valor_produto, marca_produto],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({ mensagem: 'Produto criado!', id: result.insertId });
    }
  );
});
app.delete('/produtos/:codigo', (req, res) => {
  const codigo = req.params.codigo;

  connection.query(
    'DELETE FROM produtos WHERE cod_produto = ?',
    [codigo],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({ mensagem: 'Produto removido!' });
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});