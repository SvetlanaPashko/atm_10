const BaseBlock = require('../baseBlock');

class Footer extends BaseBlock {

    constructor() {
        super($('footer.no-print'));
    }
}

module.exports = Footer;