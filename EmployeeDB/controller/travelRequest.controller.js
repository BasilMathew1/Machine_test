const travelReqDao = require('../dao/travelRequest.dao');
var travelReqController = {
    addTravelRequest: addTravelRequest,
    findTravelRequests: findTravelRequests,
    findTravelRequestById: findTravelRequestById,
    updateTravelRequest: updateTravelRequest,
    deleteByRequestId: deleteByRequestId
}

function addTravelRequest(req, res) {
    let travelReq = req.body;
    travelReqDao.create(travelReq)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravelRequestById(req, res) {
    travelReqDao.findByRequestId(req.params.request_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteByRequestId(req, res) {
    travelReqDao.deleteByRequestId(req.params.request_id).
        then((data) => {
            res.status(200).json({
                message: "TravelRequest deleted successfully",
                travelReq: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTravelRequest(req, res) {
    travelReqDao.updateTravelRequest(req.body, req.params.request_id).
        then((data) => {
            res.status(200).json({
                message: "TravelRequest updated successfully",
                travelReq: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravelRequests(req, res) {
    travelReqDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = travelReqController;