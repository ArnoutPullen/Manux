import { Component, OnInit } from '@angular/core';
import { FileService } from './list.service';
import { Folder } from './list.folder';

interface IData {
    error: any;
    outputError: any;
    response: any;
}

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

    folders: Folder[];
    files = [{ name: 'index' }];
    currentPath = '/';

    constructor(private fileService: FileService) {
        this.folders = [];
    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        if (this.currentPath !== '/') {
            this.fileService.getSingle(new Folder({name: this.currentPath})).subscribe((data: IData) => {
                this.render(data);
            });
        } else {
            this.fileService.getAll().subscribe((data: IData) => {
                this.render(data);
            });
        }
    }

    render(data: IData) {
        if (data.error == null) {
            const folders = [];
            console.log(data.response);
            if (!data.response || 0 === data.response.length) {
                return console.log('empty');
            }
            data.response.forEach((value: string, key: string) => {
                if (value) {
                    folders.push(new Folder({ id: key, name: value }));
                }
            });
            this.folders = folders;
        } else {
            console.log('error: ');
            console.log(data);
        }
    }

    changeFolder(folder: Folder) {
        if (this.currentPath !== '/') {
            this.currentPath = this.currentPath + '/' + folder.name;
        } else {
            this.currentPath = this.currentPath + folder.name;
        }
        this.refresh();
    }

}
