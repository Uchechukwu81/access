const express = require('express');
const mongoose = require('mongoose');
const app = express();
const UserModel = require('./models/Users')

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://mern:Uchechukwu@cluster0.ugxmrkg.mongodb.net/mern?retryWrites=true&w=majority");

app.get("/getRegister", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createRegister", async(req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
})

app.listen(5000, () => {
    console.log("Server runs well")
})