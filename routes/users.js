import express from "express";
const router = express.Router();

const users = [
  {
    firstName: "John",
    lastname: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastname: "Doe",
    age: 24,
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

// post - create an user
router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`your user ${user.firstName} has been created successfully`);
});


export default router;
