import User from "../models/User.js";

const newUsersList = [];

function checkName(name) {
  const validName = newUsersList.some((u) => u.name === name) || name === "";
  return !validName;
}

function addNewUser(name) {
  const newUser = new User(name);
  newUsersList.push(newUser);
  return newUser;
}

function getUsers() {
  return newUsersList;
}

export { checkName, addNewUser, getUsers };
