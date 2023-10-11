const express = require('express');

// controller imports
const router = express.Router();
// declare routes
// router.use('url', controller)
router.get('/spaces', (req, res) => {
    res.send('/space')
})


module.exports = router;