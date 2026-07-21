export class Request {
    constructor(data) {
        this.id = data.id;
        this.endpointId = data.endpointId;
        this.method = data.method;
        this.path = data.path;
        this.headers = data.headers;
        this.query = data.query;
        this.body = data.body;
        this.rawBody = data.rawBody;
        this.contentType = data.contentType;
        this.ip = data.ip;
        this.userAgent = data.userAgent;
        this.bodySize = data.bodySize;
    }
};