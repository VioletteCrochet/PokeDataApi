const cors = require("cors");
const express = require("express");
const config = require("./config");
const app = express()
const Pokemon = require("./models/pokemon.js")

const bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));


app.get(["/pokemon", "/"], (req, res) => {
    Pokemon.find().then(pokemons => {
        res.send( pokemons );
    }).catch((err) => {
        res.status(500).send(err)
    });
})
// Pokemon.insertMany().then(function () {
//     console.log("Data inserted") // Success 
// }).catch(function (error) {
//     console.log(error)     // Failure 
// }); 

app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id
    Pokemon.findOne({id}).then(pokemon => {
        res.send( pokemon );
    }).catch((err) => {
        res.status(500).send(err)
    });
})


app.listen(config.port, () => {
    console.log(`Server running at ${config.host}:${config.port}`);
});
  