const express = require('express');

// initialize an Express app
const app = express();

// sample data to simulate a database
let users = [
  { id: 1, email: "john.doe@example.com", name: "John Doe" },
  { id: 2, email: "jane.smith@example.com", name: "Jane Smith" },
  { id: 3, email: "alice.jones@example.com", name: "Alice Jones" },
  { id: 4, email: "bob.miller@example.com", name: "Bob Miller" },
  { id: 5, email: "sara.white@example.com", name: "Sara White" },
  { id: 6, email: "mike.jenkins@example.com", name: "Mike Jenkins" },
  { id: 7, email: "emily.clark@example.com", name: "Emily Clark" },
  { id: 8, email: "david.ross@example.com", name: "David Ross" },
  { id: 9, email: "lisa.hall@example.com", name: "Lisa Hall" },
  { id: 10, email: "alex.garcia@example.com", name: "Alex Garcia" },
];

let games = [
  {
    id: 1,
    title: "Game of Swords",
    description: "An epic fantasy series",
    users: [2, 4, 9, 10],
  },
  {
    id: 2,
    title: "Cardcraft",
    description: "A sandbox video game",
    users: [1, 4, 5, 7, 8, 10],
  },
  {
    id: 3,
    title: "The Legend of Zoey",
    description: "An action-adventure game",
    users: [9],
  },
];

// greetings APIs
app.get("/api/v1/greetings/hello-world", (req, res) => {
  res.json("Hello, World!");
});

app.get("/api/v1/greetings/:userId", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.userId));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: `Hello, ${user.name}! Welcome to the Game Collection!` });
});

// CRUD endpoints for users
app.get("/api/v1/users", (req, res) => {
  res.json(users);
});

app.get("/api/v1/users/:userId", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.userId));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    user: user,
  });
});

app.post("/api/v1/users", (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
  };

  users.push(newUser);

  res.status(201).json({
    user: newUser,
  });
});

app.put("/api/v1/users/:userId", (req, res) => {
  const { name, email } = req.body;

  const user = users.find((user) => user.id === parseInt(req.params.userId));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name;
  user.email = email;

  res.json({
    user: user,
  });
});

app.delete("/api/v1/users/:userId", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.userId));

  res.json();
});

// API for games
app.get("/api/v1/games/:gameId/users", (req, res) => {
  const game = games.find((game) => game.id === parseInt(req.params.gameId));

  if (!game) {
    return res.status(404).json({ message: "Game not found" });
  }

  const gameUsers = users.filter((user) => game.users.includes(user.id));

  res.json({
    users: gameUsers,
  });
});

// start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
