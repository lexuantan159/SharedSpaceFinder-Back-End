const userControllers = require('../controllers/user')
const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verify_token');
const { isAdmin , isModeratorOrAdmin , isUser} = require('../middlewares/verify_roles')

// verify token before getting user
router.use(verifyToken);
router.use(isModeratorOrAdmin);
router.get('/', userControllers.getCurrent);


module.exports = router;