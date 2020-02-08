class httpRequest {

    response = undefined;
    fulfilled = false;

    constructor(method, url, version, message){
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message
    }
}