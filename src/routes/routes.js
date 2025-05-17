const express = require('express')
const router = express.Router();

const routes_leticia = require('./routes-leticia');

router.use('/', routes_leticia)

module.exports = router;