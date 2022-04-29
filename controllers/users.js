import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const newUser = { ...user, id: uuid() };
  users.push(newUser);
  res.send(
    `your user ${newUser.firstName} has been created with the id: ${newUser.id}`
  );
};

export const getUser = (req, res) => {
  const { id } = req.params;
  res.send(users.find((user) => user.id === id));
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstname) user.firstname = firstname;
  if (lastname) user.lastname = lastname;
  if (age) user.age = age;
  res.send(user);
};
