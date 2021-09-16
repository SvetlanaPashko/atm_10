const fetch = require("node-fetch");

function sendResponse(link) {
    return fetch(link);
}

function updateRequest(link, params) {
    return fetch(link, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(params)})
}

function createRequest(link, params) {
    return fetch(link, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(params)})
}

function deleteRequest(link) {
    return fetch(link, {method: 'DELETE'})
}

module.exports = {
    sendResponse,
    updateRequest,
    createRequest,
    deleteRequest
};