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
    disableToggle: boolean;

    constructor(private serviceService: ServicesService) {
        this.disableToggle = false;
    }

    startService(service: Service) {
        this.disableToggle = true;
        console.log('stop service: ' + service);
        this.serviceService.startService(service).subscribe((data: IData) => {
            console.log(data);
            if (data.error == null && data.response.length >= 1) {
                this.disableToggle = false;
                console.log('service started: ' + service.name);
            }
        });
    }

    stopService(service: Service) {
        this.disableToggle = true;
        console.log('stop service: ' + service);
        this.serviceService.stopService(service).subscribe((data: IData) => {
            console.log(data);
            if (data.error == null && data.response.length >= 1) {
                this.disableToggle = false;
                console.log('service stopped' + service.name);
            }
        });
    }

    toggleService(service: Service) {
        if (service.activated) {
            this.stopService(service);
        } else {
            this.startService(service);
        }
    }

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
                            services.push(new Service({ id: key, name: value.replace(activated, ''), activated: true }));
                        } else if (value.startsWith(disabled)) {
                            services.push(new Service({ id: key, name: value.replace(disabled, ''), activated: false }));
                        }
                    }
                });
                this.services = services;
            }
        });
    }

}
