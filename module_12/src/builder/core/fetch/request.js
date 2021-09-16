const fetch = require('node-fetch');

const Response = require('./response');

class Request {
    constructor(url, options = {}) {
        this._url = url;
        this._options = options;
    }

    /**
     * @param options {Object}
     * @return {Request}
     */
    options(options) {
        this._options = options;
        return this;
    }

    /**
     * @param name {Method}
     * @return {Request}
     */
    method(name) {
        this._options.method = name;
        return this;
    }

    /**
     * @param headers {Headers}
     * @return {Request}
     */
    headers(headers) {
        this._options.headers = headers;
        return this;
    }

    /**
     * @param url {string}
     * @param isNew {boolean}
     * @return {Request}
     */
    url(url, isNew = false) {
        this._url = isNew ? url : this._url + url;
        return this;
    }

    /**
     * @param body {object}
     * @returns {Request}
     */
    body(body) {
        this._options.body = JSON.stringify(body);
        return this;
    }

    async send() {
        const result = await fetch(this._url, this._options);
        const body = await result.json();
        return new Response(result, body);
    }
}

module.exports = Request;