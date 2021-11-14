const {
  addUser,
  getUsers,
  deleteUser,
  getUser,
  updateUser,
} = require("./repository");
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", async (req, res) => {
  let users = await getUsers(req.query.search);
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  let user = await getUser(id);
  if (user) {
    res.send(user);
  } else {
    res.send(404);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let response = await deleteUser(id);
  if (response) {
    res.send(response);
  } else {
    res.send(404);
  }
});

router.post("/", async (req, res) => {
  const name = req.body.name;
  let result = await addUser(name);
  res.send({ success: true });
});

router.put("/", async (req, res) => {
  const name = req.body.name;
  const id = req.body.id;
  let user = await updateUser(id, name);
  res.send(user);
});

module.exports = router;
