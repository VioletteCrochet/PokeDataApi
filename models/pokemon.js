const { mongoose } = require("../mongoose.js");

const StatsSchema = new mongoose.Schema({
  HP: Number,
  attack: Number,
  defense: Number,
  special_attack: Number,
  special_defense: Number,
  speed: Number,
});

const ApiTypeSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const ApiResistanceSchema = new mongoose.Schema({
  name: String,
  damage_multiplier: Number,
  damage_relation: String,
});

const ApiEvolutionSchema = new mongoose.Schema({
  name: String,
  pokedexId: Number,
});

const ApiPreEvolutionSchema = new mongoose.Schema({
  name: String,
  pokedexId: Number,
});

const PokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  pokedexId: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  sprite: { type: String, required: true },
  slug: { type: String, required: true },
  stats: { type: StatsSchema, required: true },
  apiTypes: { type: [ApiTypeSchema], required: true },
  apiGeneration: { type: Number, required: true },
  apiResistances: { type: [ApiResistanceSchema], required: true },
  resistanceModifyingAbilitiesForApi: { type: [mongoose.Schema.Types.Mixed], required: true },
  apiEvolutions: { type: mongoose.Schema.Types.Mixed, required: false},
  apiPreEvolution: { type: mongoose.Schema.Types.Mixed, required: false },
  apiResistancesWithAbilities: { type: [mongoose.Schema.Types.Mixed], required: true },
});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);
module.exports = Pokemon;
