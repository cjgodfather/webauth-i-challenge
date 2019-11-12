const router = require("express").Router();
const requiredAuth = require("./requiredAuth");

const db = require("../auth/authModel");

router.get("/", requiredAuth, (req, res) => {
  db.find().then(users => res.status(200).json(users));
});

module.exports = router;
