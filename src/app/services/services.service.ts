import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../app.config';
import { Service } from './services.model';

@Injectable()
export class ServicesService {
    private prefix = '/services';
    constructor(private httpClient: HttpClient) {

    }
    // http://localhost:3000/api/services/
    getAll() {
        return this.httpClient.get(Config.Api.BaseUrl + this.prefix);
    }
    // http://localhost:3000/api/services/ID
    getSingle(service: Service) {
        return this.httpClient.get(Config.Api.BaseUrl + this.prefix + '?service=' + service.name);
    }
    // http://localhost:3000/api/services/ID/start
    startService(service: Service) {
        return this.httpClient.get(Config.Api.BaseUrl + this.prefix + '/' + service.name + '/start');
    }
    // http://localhost:3000/api/services/ID/stop
    stopService(service: Service) {
        return this.httpClient.get(Config.Api.BaseUrl + this.prefix + '/' +  service.name + '/stop');
    }
    // http://localhost:3000/api/services/ID/restart
    restartService(service: Service) {
        return this.httpClient.get(Config.Api.BaseUrl + this.prefix + '/' +  service.name + '/restart');
    }
}
