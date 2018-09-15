import { Component, OnInit } from '@angular/core';
import { Service } from './services.model';
import { ServicesService } from './services.service';
import { IData } from '../core/IData';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    services: Service[] = [];

    constructor(private serviceService: ServicesService) { }

    ngOnInit() {
        this.serviceService.getAll().subscribe((data: IData) => {
            // console.log(data);
            if (data.error == null) {
                const services = [];
                const activated = ' [ + ]  ';
                const disabled = ' [ - ]  ';
                data.response.forEach((value: string, key: string) => {
                    if (value) {
                        if (value.startsWith(activated)) {
                            value = value.replace(activated, '');
                            services.push(new Service({ id: key, name: value.replace(activated, ''), activated: true }));
                        } else if (value.startsWith(disabled)) {
                            value = value.replace(disabled, '');
                            services.push(new Service({ id: key, name: value.replace(disabled, ''), activated: false }));
                        }
                    }
                });
                this.services = services;
            }
        });
    }

}
