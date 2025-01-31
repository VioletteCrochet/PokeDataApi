import { connexion } from "./connexion.js";
import mongoose from "mongoose";
// const user = argv._[0];
// const password = argv._[1];

//define use of promises
mongoose.Promise = global.Promise;

//define database connection
mongoose.connect(connexion);

//expose module
export { mongoose };
