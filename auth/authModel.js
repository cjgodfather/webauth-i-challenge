const db = require("../data/dbConfig.js");

module.exports = {
  addUser,
  find,
  deleteUser,
  findById,
  findByUsername
};

function find() {
  return db("users").select("id", "username");
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findByUsername(username) {
  return db("users")
    .where({ username })
    .first();
}

function findById(id) {
  return db("users")
    .select("id", "username", "password")
    .where({ id })
    .first();
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .first()
    .del();
}
