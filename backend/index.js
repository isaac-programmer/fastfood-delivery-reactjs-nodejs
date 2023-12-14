const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
let qtdInsertedUsers = 1;

// Habilitando o CORS
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

// Simulação de um banco de dados
let users = [{ 
  id: 1,
  cpf: "999.999.999-89", 
  name: "Usuário 1", 
  email: "teste@teste.com",
  phone: "(99) 99999-9999",
  cep: "62051-045",
  state: "CE",
  city: "Sobral",
  bairro: "Cohab II",
  address: "Rua Francisco Ximenes Menezes",
  number: 1000,
  complement: "Casa"
}];

let products = [
  { id: 1, name: "Hambúrguer", price: "20,00", img: "banner-01.jpg" },
  { id: 2, name: "Pizza", price: "40,00", img: "banner-02.jpg" },
  { id: 3, name: "Batatas", price: "6,00", img: "banner-03.jpg" },
  { id: 4, name: "Refrigerante", price: "4,00", img: "banner-04.jpg" },
  { id: 5, name: "Suco", price: "2,50", img: "banner-05.jpg" },
];

// Rota para obter todos os usuários
app.get("/users", (req, res) => {
  res.json(users);
});

// Rota para obter um usuário por ID
app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if(user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});

// Rota para adicionar um novo usuário
app.post("/user", (req, res) => {
  const { cpf } = req.body;
  const user = users.find((user) => user.cpf === cpf);

  // Verifica se já existe um usuário com o CPF informado na requisição.
  if(!user) {
    qtdInsertedUsers++;

    const newUser = {
      ...req.body,
      id: qtdInsertedUsers
    };
    
    users.push(newUser);
    console.log(users);
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ error: "CPF existente" });
  }
});

// Rota para atualizar um usuário existente
app.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  users = users.map((user) => {
    if(user.id === userId) {
      return { ...user, ...updateUser };
    }
    return user;
  });
  console.log(users);
  res.status(200).json(users.find((user) => user.id === userId));
});

// Rota para deletar um usuário
app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  console.log(users);
  res.status(200).json({ message: "Usuário deletado com sucesso" });
});

// Rota para efetuar o login
app.post('/login', (req, res) => {
  const { cpf } = req.body;

  // Procura o usuário pelo CPF no "banco de dados"
  const user = users.find(user => user.cpf === cpf);

  // Verifica se o usuário existe
  if(!user) {
    return res.status(401).json({ error: 'Usuário não encontrado.' });
  }

  // Autenticação bem-sucedida, retornando os detalhes do usuário
  return res.status(200).json(user);
});

// Rota para obter todos os produtos
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`App escutando na porta ${port}`);
});
