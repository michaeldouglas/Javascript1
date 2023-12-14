const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const todos = [];

//get
app.get('/todos', (req, res) => {
  res.json(todos);
});

//post
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//put
app.put('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const updatedTodo = req.body;

  const index = todos.findIndex(todo => todo.id === todoId);
  if (index !== -1) {
    todos[index] = updatedTodo;
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo nao encontrada!' });
  }
});

//delete
app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);

  const index = todos.findIndex(todo => todo.id === todoId);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ message: 'Todo nao encontrada!' });
  }
});

app.listen(3000, () => {
  console.log(`Servidor rodando em: http://localhost:3000`);
})


