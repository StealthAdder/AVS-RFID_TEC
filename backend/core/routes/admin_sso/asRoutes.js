const express = require('express');
const router = express.Router();
const searchlocationsvs = require('../../services/admin_svs/searchlocationsvs');
const updatelocationsvs = require('../../services/admin_svs/updatelocationsvs');
const addlocationsvs = require('../../services/admin_svs/addlocationsvs');

router.post('/location', searchlocationsvs());
router.post('/updatelocation', updatelocationsvs());
router.post('/addlocation', addlocationsvs());

module.exports = router;
