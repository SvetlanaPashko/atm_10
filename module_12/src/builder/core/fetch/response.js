class Response {
    constructor(response, body) {
        this.response = response;
        this._body = body;
    }

    get body() {
        return this._body;
    }

    get headers() {
        return this.response.headers;
    }

    get url() {
        return this.response.url;
    }

    get method() {
        return this.response.method;
    }

    get status() {
        return {
            statusCode: this.response.status,
            statusMessage: this.response.statusText,
        };
    }
}

module.exports = Response;