import express from "express";
import lodash from "lodash";
import mongoose from "mongoose";
import gameModel from "./gameModel.js";

const app = express();
const port = 3001;

app.use(express.json());

const connectionToDb = async () => {
    try{
        await mongoose.connect('mongodb+srv://nuts:gonuts@buster.e8asuxy.mongodb.net/game?retryWrites=true&w=majority');
        console.log("Connection to Mongoose is successfull!");
    } catch (error){
        console.error(error);
    }
}

app.get ("/", (req, res) => {
    res.send('You are in main route');
});

app.get ("/games", (req, res) => {
    res.send('You are in games main route');
});

app.post ("/create-games", async (req, res) => {
    try{
        const newGame = new gameModel (req.body);
        await newGame.save();
        res.status(201).send("New game is created");
    }catch (error){
        res.status(405).send(error);
        console.error(error);
    }
    
});

app.delete ("/delete-games", (req, res) => {
    res.send('You are in post route to delete games');
});

app.put ("/update-games", (req, res) => {
    res.send('You are in post route to update games');
});

app.get ("/:id([0-9])", (req, res) => {
    res.send(`You are viewing ${req.params.gametitles}`);
});

app.get ("*", (req, res) => {
    res.send(`YOU ARE ON WRONG ROUTE!`);
});

app.listen(port, () => {
    connectionToDb();
    console.log(`Server started on port ${port}`);
});
