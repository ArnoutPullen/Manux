import { Component, OnInit } from '@angular/core';
import { FileService } from './list.service';
import { Folder } from './list.folder';
import { File } from './list.file';
import { IData } from '../core/IData';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

    folders: Folder[];
    currentFolders = [];
    files = [{ name: 'index' }];
    currentPath = '/';

    constructor(private fileService: FileService) {
        this.folders = [];
    }

    ngOnInit() {
        this.refresh();
    }

    clearCurrentPath() {
        this.currentPath = this.currentPath.replace(/\/\/+/g, '/');
    }

    refresh() {
        this.clearCurrentPath();
        this.fileService.getSingle(new Folder({ name: this.currentPath })).subscribe((data: IData) => {
            this.render(data);
        });
        const folders = this.currentPath.split('/');
        this.currentFolders = folders;
    }

    render(data: IData) {
        if (data.error == null) {
            const folders = [];
            const files = [];

            if (!data.response || 0 === data.response.length) {
                return console.log('empty');
            }
            data.response.forEach((value: string, key: string) => {
                if (value) {
                    if (value.includes('.')) {
                        files.push(new File({ id: key, name: value }));
                    } else {
                        folders.push(new Folder({ id: key, name: value }));
                    }
                }
            });
            this.folders = folders;
            this.files = files;
        } else {
            console.log('error: ');
            console.log(data);
        }
    }

    previousFolder() {
        if (this.currentPath !== '/') {
            this.currentPath = this.currentPath.substr(0, this.currentPath.lastIndexOf('/'));
            if (!this.currentPath) {
                this.currentPath = '/';
            }
            this.refresh();
        }
    }

    changeFolder(folder: string) {
        let path = '';
        const x = this.currentFolders.indexOf(folder);
        for (let i = 0; i <= x; i++) {
            if (this.currentFolders[i]) {
                path += '/' + this.currentFolders[i];
            }
        }
        this.currentPath = path;
        this.refresh();
    }

    nextFolder(folder: Folder) {
        if (this.currentPath !== '/') {
            this.currentPath = this.currentPath + '/' + folder.name;
        } else {
            this.currentPath = this.currentPath + folder.name;
        }
        this.refresh();
    }

    rootFolder() {
        this.currentPath = '/';
        this.refresh();
    }

}
