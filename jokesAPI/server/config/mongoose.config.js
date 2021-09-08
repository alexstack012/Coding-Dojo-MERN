const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/jokes`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => {
        console.log(`Successfully connected to jokes`);
    })

    .catch((err) => {
        console.log(`mongoose connection to jokes failed`, err);
    })
