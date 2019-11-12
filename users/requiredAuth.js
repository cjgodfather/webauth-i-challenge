// const db = require("../auth/authModel");
// const bcrypt = require("bcryptjs");

module.exports = (req, res, next) => {
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ error: "no valid credentails" });
  }

  // const username = req.headers.username;
  // const password = req.headers.password;
  // console.log(username, password);
  // if (username && password) {
  //   db.findByUsername(username)
  //     .then(user => {
  //       console.log(user);
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next();
  //       } else {
  //         res.status(401).json({ message: "Invalid Credentials" });
  //       }
  //     })
  //     .catch(error => {
  //       res.status(500).json({ message: "Unexpected error" });
  //     });
  // } else {
  //   res.status(400).json({ message: "No credentials provided" });
  // }
};
