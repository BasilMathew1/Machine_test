const express = require('express');
const router = express.Router();
const travelReqController = require('../controller/travelRequest.controller');

router.post('/', travelReqController.addTravelRequest);
router.get('/', travelReqController.findTravelRequests);
router.get('/:request_id', travelReqController.findTravelRequestById);
router.put('/:request_id', travelReqController.updateTravelRequest);
router.delete('/:request_id', travelReqController.deleteByRequestId);

module.exports = router;