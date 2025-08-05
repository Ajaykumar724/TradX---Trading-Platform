const {Signup, Login} = require("../Controllers/AuthController.js");
const { userVerification } = require("../Middlewares/AuthMiddleware.js");
const router = require("express").Router();

router.post('/',userVerification);
router.post("/signpage",Signup);
router.post('/login', Login);

module.exports = router;