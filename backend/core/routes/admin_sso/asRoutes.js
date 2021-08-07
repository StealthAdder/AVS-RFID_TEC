const express = require('express');
const router = express.Router();
const searchlocationsvs = require('../../services/admin_svs/searchlocationsvs');
const updatelocationsvs = require('../../services/admin_svs/updatelocationsvs');

router.post('/location', searchlocationsvs());
router.post('/updatelocation', updatelocationsvs());

module.exports = router;
