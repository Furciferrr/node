const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./users-router");
const mongoose = require("mongoose");

const port = 8000;

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/users");
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
