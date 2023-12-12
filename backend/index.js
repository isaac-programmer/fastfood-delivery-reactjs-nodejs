const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Habilitando o CORS
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// Simulação de um banco de dados
let users = [
  { id: 1, name: 'Usuário 1' },
  { id: 2, name: 'Usuário 2' },
  { id: 3, name: 'Usuário 3' }
];

let products = [
  { id: 1, name: 'Hambúrguer', price: '20,00', img: 'banner-01.jpg'},
  { id: 2, name: 'Pizza', price: '40,00', img: 'banner-02.jpg'},
  { id: 3, name: 'Batatas', price: '6,00', img: 'banner-03.jpg'},
  { id: 4, name: 'Refrigerante', price: '4,00', img: 'banner-04.jpg'},
  { id: 5, name: 'Suco', price: '2,50', img: 'banner-05.jpg'},
]

// Rota para obter todos os usuários
app.get('/users', (req, res) => {
  res.json(users);
});

// Rota para obter um usuário por ID
app.get('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// Rota para adicionar um novo usuário
app.post('/user', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Rota para atualizar um usuário existente
app.put('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  users = users.map(user => {
    if (user.id === userId) {
      return { ...user, ...updateUser };
    }
    return user;
  });
  res.json(users.find(user => user.id === userId));
});

// Rota para deletar um usuário
app.delete('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.json({ message: 'Usuário deletado com sucesso' });
});

// Rota para obter todos os produtos
app.get('/products', (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`App escutando na porta ${port}`);
})