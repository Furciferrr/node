const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./users-router");
const mongoose = require("mongoose");

const port = 8000;

const app = express();

main().catch((err) => console.log(err));

const uri = process.env.MONGODB_URI;
const localUri = "mongodb://localhost:27017/users"

async function main() {
  await mongoose.connect('mongodb+srv://vadim:<%HXc-bM8Hn3Y5H*>@cluster0.z2cpp.mongodb.net/Cluster0?retryWrites=true&w=majority');
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use("/users", users);

app.get("/tasks", (req, res) => {
  res.send("Tasks");
});

app.use((req, res) => {
  res.send(404);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
