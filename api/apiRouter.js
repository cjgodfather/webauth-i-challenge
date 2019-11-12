const router = require("express").Router();

const authRouter = require("../auth/authRouter.js");
const usersRouter = require("../users/usersRouter.js");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ message: "it's authentication week", session: req.session });
});

module.exports = router;
