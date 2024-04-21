const express = require('express')
const cors = require('cors')
const collection = require('./db.js');
const app = express();
const port = 8000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {
    res.send("hello");


})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
 
    try {
        const userInfo = await collection.findOne({ email: email, password: password })
        if (check) {
            res.json(userInfo);
        }
        else {
            res.json({erro: "not exist"});
        }
    }
    catch (e) {
        res.json("not exist")

    }
})


app.post("/Signup", async (req, res) => {
    const { name, email, password } = req.body;

    const data = {
        name: name,
        email: email,
        password: password
    }

    try {
        const userInfo = await collection.findOne({ email: email, password: password })
        if (check) {
            res.json({error: "already exits"});
        }
        else {
            await collection.insertMany([data]);
            res.json({userInfo: data});
        }
    }
    catch (e) {
        res.json("not exist")

    }
})
app.listen(port, () => console.log(`Server is running on ${port}`));
