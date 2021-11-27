const TravelReq = require('../models/TravelRequest');
var travelReqDao = {
    findAll: findAll,
    create: create,
    findByRequestId: findByRequestId,
    deleteByRequestId: deleteByRequestId,
    updateTravelRequest: updateTravelRequest
}

function findAll() {
    return TravelReq.findAll();
}

function findByRequestId(request_id) {
    return TravelReq.findByPk(request_id);
}

function deleteByRequestId(request_id) {
    return TravelReq.destroy({ where: { request_id: request_id} });
}

function create(travelReq) {
    var newTravelReq = new TravelReq(travelReq);
    return newTravelReq.save();
}

function updateTravelRequest(travelReq, request_id) {
    var updateTravelReq = {
       cause_travel: travelReq.cause_travel,
       source : travelReq.source ,
        destination: travelReq.destination,
        mode: travelReq.status ,
        from_date: travelReq.from_date ,
        to_date: travelReq.to_date ,
        no_days: travelReq.no_days,
        priority: travelReq.priority ,
        project_id: travelReq.project_id ,
        status: travelReq.status       
    };
    return TravelReq.update(updateTravelReq, { where: { request_id: request_id} });
}
module.exports = travelReqDao;