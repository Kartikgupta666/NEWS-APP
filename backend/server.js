const express = require('express');
const cors = require('cors');
const User = require('./db.js');
const app = express();
const port = 8000;
const jwt = require('jsonwebtoken');
const JWT_SECRET = "shhh";
const fetchuser = require('./middleware/fetchuser.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const userInfo = await User.findOne({ email, password });
        if (userInfo) {
            const authToken = jwt.sign({ id: userInfo.id }, JWT_SECRET);
            // console.log(userInfo, authToken);
            return res.json({ userInfo, authToken });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const data = {
        name,
        email,
        password
    };

    try {
        const userInfo = await User.findOne({ email });
        if (userInfo) {
            return res.status(409).json({ message: "User already exists" });
        } else {
            await User.insertMany([data]);
            return res.status(201).json({ message: "User created successfully" });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        if (user) {
            return res.json(user);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, () => console.log(`Server is running on ${port}`));
