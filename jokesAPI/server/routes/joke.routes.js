const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", jokeController.findAllJokes);
    app.get("/api/jokes/:id", jokeController.findOneSingleJoke);
    app.post("/api/jokes/new", jokeController.createJoke);
    app.put("/api/jokes/update/:id", jokeController.updateExistingJokes);
    app.delete("/api/jokes/delete/:id", jokeController.deleteAnExistingJokes);
}
