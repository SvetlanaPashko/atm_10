const PetsController = require('./controllers/petsController');

class App {
    constructor() {
        this.pets = new PetsController();
    }
}

module.exports = App;