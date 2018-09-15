import { Folder } from './list.folder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../app.config';
import { Injectable } from '@angular/core';

@Injectable()
export class FileService {
        private prefix = 'files';
        constructor(private httpClient: HttpClient) {}
        getAll() {
            return this.httpClient.get(Config.Api.BaseUrl + '/' + this.prefix);
        }
        getSingle(folder: Folder) {
            return this.httpClient.get(Config.Api.BaseUrl + '/' + this.prefix + '?folder=' + folder.name);
        }
}
