const {expect} = require('chai');

const App = require('../builder/app');
const updatePet = require('../data/update.json');
const createPet = require('../data/create.json');

const app = new App();

describe('Tests with http requests', function () {

    it('Check the response status is 200', async function () {
        const response = await app.pets.getByID(11);
        expect(response.status.statusCode).to.be.equal(200);
    });

    it('Update the pets name', async function () {
        const response = await app.pets.update(updatePet);
        expect(response.body.name).to.be.equal('Mike');
    });

    it('Create a new pet', async function () {
        const response = await app.pets.create(createPet);
        expect(response.body.id).to.be.equal(9);
    });

    it('Delete a pet', async function () {
        const response = await app.pets.delete(9);
        expect(response.status.statusCode).to.be.equal(200);
    });
})