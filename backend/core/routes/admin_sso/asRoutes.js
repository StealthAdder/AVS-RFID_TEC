const express = require('express');
const router = express.Router();
const searchlocationsvs = require('../../services/admin_svs/searchlocationsvs');

router.post('/location', searchlocationsvs());

module.exports = router;
