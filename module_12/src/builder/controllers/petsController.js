const Controllers = require('./controllers');

class PetsController extends Controllers {
    constructor() {
        super('pet/');
    }
}

module.exports = PetsController;