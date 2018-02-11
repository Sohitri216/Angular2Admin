import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

// import { UUID } from 'angular2-uuid';

declare var localStorage: any;

@Injectable()
export class HttpClient {
    session: any;
    deviceId='';
    deviceType='';
    constructor(private http: Http) {
        this.http = http;
        if(localStorage.getItem('deviceData')){
            this.deviceId = JSON.parse(localStorage.getItem('deviceData')).id;      
            this.deviceType = JSON.parse(localStorage.getItem('deviceData')).type;
        }else{
            // this.deviceId = UUID.UUID();      
            this.deviceType = '1234';
            localStorage.setItem('deviceData',JSON.stringify({id:this.deviceId,type:this.deviceType}));
        }
    }

    setToken() {
        if(localStorage.getItem('SessionData')) {
            this.session = JSON.parse(localStorage.getItem('SessionData'));            
        }
    }

    createAuthorizationHeader(headers: Headers) {
        this.setToken();
        headers.append('x-auth-token', this.session.token);
    }

    get(url, auth = true, params = {}) {
        let opt = this.getHeaders(auth);
        if(Object.keys(params).length >= 0) {
            let param: URLSearchParams = new URLSearchParams();
            for(let key in params) {
                param.set(key, params[key]);
            }
            opt.search = param;
        }
        return this.http.get(url, opt);
    }

    post(url, data, auth = true, formData = false) {
        let opt = this.getHeaders(auth);
        if(formData) {
            opt.headers.append('Content-Type',undefined);
            opt.headers.append('Accept', 'application/json');
        }
        // console.log('data', data);
        return this.http.post(url, data, opt);
    }

    delete(url, auth = true) {
        let opt = this.getHeaders(auth);
        return this.http.delete(url, opt);
    }

    put(url, data, auth = true, formData = false) {
        let opt = this.getHeaders(auth);
        if(formData) {
            opt.headers.append('Content-Type',undefined);
            opt.headers.append('Accept', 'application/json, text/plain, */*');
        }
        return this.http.put(url, data, opt);
    }

    getHeaders(auth = true) {
        let opt = {
            headers: undefined,
            search: undefined
        };
        let headers = new Headers();
        headers.append('x-auth-deviceid', this.deviceId);
        headers.append('x-auth-devicetype', this.deviceType);
        if (auth) {
            this.createAuthorizationHeader(headers);
        }
        opt.headers = headers;
        return opt;
    }
}
