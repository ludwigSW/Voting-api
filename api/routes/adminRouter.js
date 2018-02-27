const express = require('express');

const router = express.Router();
const controller = require('../controllers/adminController');

router.get('/speakers', controller.speakersWithVoteCount);

module.exports = router;
