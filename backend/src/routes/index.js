const router = require("express").Router();
const auth = require("../controllers/authController");
const content = require("../controllers/contentController");
const progress = require("../controllers/progressController");

router.post("/auth/register", auth.register);
router.post("/auth/login", auth.login);

router.get("/levels", content.listLevels);
router.get("/contents", content.listContents);

router.get("/progress/:userId", progress.list);
router.get("/progress/:userId/contents", progress.listContents);
router.put("/progress", progress.save);
router.delete("/progress/:userId/:contentId", progress.remove);

module.exports = router;
