const router = require('express').Router();

const { sendEmail } = require('../services/email.services');

router.post('/send', sendEmail);

module.exports = router;