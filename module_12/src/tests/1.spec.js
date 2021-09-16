const {expect} = require('chai');

const {sendResponse} = require('../core/fetch');
const url = require('../data/url.json');


describe('Tests with http requests', function () {

    it('Check the response status is 200', async function () {
        const response = await sendResponse(url.baseUrl1);
        expect(response.status).to.be.equal(200)
    });

    it('Check the response header is "application/json; charset=utf-8"', async function () {
        const response = await sendResponse(url.baseUrl1);
        expect(response.headers.get('Content-Type')).to.be.equal('application/json; charset=utf-8')
    });

    it('Check the response body is the array of 10 users', async function () {
        const response = await sendResponse(url.baseUrl1);
        const body = await response.json();
        expect(body).to.be.an('array').to.have.lengthOf(10)
    });
})