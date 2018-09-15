import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../app.config';
import { Service } from './services.model';

@Injectable()
export class ServicesService {
    private prefix = 'services';
    constructor(private httpClient: HttpClient) {

    }
    getAll() {
        return this.httpClient.get(Config.Api.BaseUrl + '/' + this.prefix);
    }
    getSingle(folder: Service) {
        return this.httpClient.get(Config.Api.BaseUrl + '/' + this.prefix + '?service=' + folder.name);
    }
}
