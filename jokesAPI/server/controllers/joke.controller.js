const Joke = require("../models/joke.model")
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(createJoke => res.json({ joke: createJoke }))
        .catch(err => res.status(400).json(err));
}

module.exports.updateExistingJokes = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id }, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
        .then(updatedJokes => res.json({ joke: updatedJokes }))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAnExistingJokes = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}