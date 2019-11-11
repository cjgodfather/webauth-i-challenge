const router = require("express").Router();
const bcrypt = require("bcryptjs");

const db = require("./authModel.js");

router.get("/", (req, res) => {
  db.find().then(users => res.status(200).json(users));
});

router.get("/:id", (req, res) => {
  db.findById(req.params.id).then(users => res.status(200).json(users));
});

router.post("/register", (req, res) => {
  const newUser = req.body;
  const hashedPw = bcrypt.hashSync(newUser.password, 12);
  newUser.password = hashedPw;
  db.addUser(newUser).then(user => res.status(200).json(user));
});

router.delete("/:id/delete", (req, res) => {
  db.deleteUser(req.params.id).then(user => res.status(200).json(user));
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.findByUsername(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `welcome ${user.username}` });
      } else {
        res.status(401).json({ message: `invalid credentails` });
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
