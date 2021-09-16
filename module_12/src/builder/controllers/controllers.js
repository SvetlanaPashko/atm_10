const Request = require('../core/fetch/request');
const url = require('../../data/url.json');

class Controllers {
    constructor(postfix) {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        this.request = () => new Request(url.baseUrl + postfix, options);
    }

    /**
     * @param id {number}
     * @returns {Promise<Response>}
     */
    getByID(id) {
        return this.request()
            .url(`${id}`)
            .send()
    }

    /**
     * @param updObj {object}
     * @returns {Promise<Response>}
     */
    update(updObj) {
        return this.request()
            .method('PUT')
            .body(updObj)
            .send()
    }

    /**
     * @param newObj {object}
     * @returns {Promise<Response>}
     */
    create(newObj) {
        return this.request()
            .method('POST')
            .body(newObj)
            .send()
    }

    /**
     * @param id {number}
     * @returns {Promise<Response>}
     */
    delete(id) {
        return this.request()
            .url(`${id}`)
            .method('DELETE')
            .send()
    }
}

module.exports = Controllers;
