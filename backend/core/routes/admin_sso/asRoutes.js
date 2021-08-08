const express = require('express');
const router = express.Router();
const searchlocationsvs = require('../../services/admin_svs/searchlocationsvs');
const updatelocationsvs = require('../../services/admin_svs/updatelocationsvs');
const addlocationsvs = require('../../services/admin_svs/addlocationsvs');
const finesvs = require('../../services/admin_svs/finesvs');
const tvsUpdatesvs = require('../../services/admin_svs/tsvUpdatesvs');

router.post('/location', searchlocationsvs());
router.post('/updatelocation', updatelocationsvs());
router.post('/addlocation', addlocationsvs());
router.post('/fines', finesvs());
router.post('/tsvUpdate', tvsUpdatesvs());

module.exports = router;
