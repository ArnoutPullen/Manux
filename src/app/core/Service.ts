import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../app.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Service<T> {
    constructor(private httpService: HttpClient) {}
    public get(path: string): Observable<T> {
        return this.httpService.get<T>(Config.Api.BaseUrl + path);
    }
}
