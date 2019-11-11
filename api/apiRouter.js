const router = require("express").Router();
const bcrypt = require("bcryptjs");

const authRouter = require("../auth/authRouter.js");
const usersRouter = require("../users/usersRouter.js");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.send("it's authentication week");
});

module.exports = router;
