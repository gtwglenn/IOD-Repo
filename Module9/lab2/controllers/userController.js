const { User } = require("../models");

const getUsers = (res) => {
  User.findAll().then(data => res.send({ result: 200, data }))
    .catch(err => res.send({ result: 500, error: err.message }));
};

const createUser = (data, res) => {
  User.create(data).then(data => res.send({ result: 200, data }))
    .catch(err => res.send({ result: 500, error: err.message }));
};

module.exports = { getUsers, createUser };
