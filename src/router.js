const express = require('express');
const router = new express.Router();
const onfidoRoute = require('./v1/routes/onfido.js');
const healthRoute = require('./v1/routes/health.js');

router.use('/api/v1/kyc', onfidoRoute);
router.use('/api/v1/health', healthRoute);

module.exports = router;
