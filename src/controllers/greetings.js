const GreetingController = {
  helloWorld: (req, res) => {
    res.json("Hello, World!");
  },

  helloUser: (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.userId));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: `Hello, ${user.name}! Welcome to the Game Collection App!`,
    });
  },
};

module.exports = { GreetingController };
