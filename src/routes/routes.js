const express = require('express')
const router = express.Router();

const routesLeticia = require('./routes-leticia');

router.use('/', routesLeticia)

module.exports = router;