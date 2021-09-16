const {expect} = require('chai');

const {sendResponse, updateRequest, createRequest, deleteRequest} = require('../core/fetch');
const update = require('../data/update.json');
const create = require('../data/create.json');
const url = require('../data/url.json');

describe('Tests with http requests', function () {

    it('Check the response status is 200', async function () {
        const response = await sendResponse(url.swaggerId);
        expect(response.status).to.be.equal(200);
    });

    it('Update the pets name', async function () {
        const response = await updateRequest(url.swaggerUpdate, update);
        const body = await response.json();
        expect(body.name).to.be.equal('Mike');
    });

    it('Create a new pet', async function () {
        const response = await createRequest(url.swaggerUpdate, create);
        const body = await response.json();
        expect(body.id).to.be.equal(9);
    });

    it('Delete a pet', async function () {
        const response = await deleteRequest(url.swaggerDelete);
        expect(response.status).to.be.equal(200);
    });
})