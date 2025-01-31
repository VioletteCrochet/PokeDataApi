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

app.post("/pokemon", (req,res) => { 
    let newPokemon = new Pokemon( 
        req.body
    );
    newPokemon.save().then( pokemon => {
        res.status(201).send(pokemon);
    }).catch((err) => {
        res.status(500).send(err);
    });
});
app.delete("/pokemon/:id", (req, res) => {
    const id = req.params;
    Pokemon.findOneAndDelete({id}, (err, pokemon) => {
        if(err) {
            res.status(500).send()
        } else if (!pokemon) {
            res.status(404).send()
        } else {
            res.send("deleted");
        }
    })
});
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
  