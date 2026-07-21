import dotenv from 'dotenv'; //dotenv is a pakcage that lets us use env variables
dotenv.config(); // we call to initialise dotenv
import express from "express"; //frameowrk for building apis
import Router from "./views/router.js";

const port = process.env.PORT; // geet the PORT varible from the .env file
const app = express(); //create a new express app

app.use(express.json()); // this configures express to read rq body when a user sends data
app.use(Router); // tells app to use the router for the functionality when the a user sends a rq

async function startServer() { // async function can wait for things to happen (await)
  try { // try to start the server using app.listen
    app.listen(port, () => console.log(`🤖 Listening on Port: ${port}`));
  } catch (err) { //if theres an error tell us
    console.log("🤖 Oh no something went wrong", err);
  }
}
//entry point
startServer(); // call the start server function to start the app