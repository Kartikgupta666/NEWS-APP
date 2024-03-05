import express from "express"
import bodyparser from "body-parser"
import mongoose from "mongoose"


const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://server:kartik@cluster0.wejbwu8.mongodb.net/storage', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (e.g., HTML, CSS)

// Route for the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/public.html');
});

// Route for handling user input
app.post('/login', async (req, res) => {
  const userData = new User({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    await userData.save();
    res.sendFile(__dirname + '/public/signup_success.html');
  } catch (error) {
    res.status(500).send('Error saving user data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});