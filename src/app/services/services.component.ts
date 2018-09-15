import { Component, OnInit } from '@angular/core';
import { Service } from './services.model';
import { ServicesService } from './services.service';
import { IData } from '../core/IData';
import { NotificationService } from '../notifications/notification.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    services: Service[] = [];
    disableToggle: boolean;
    isLoading: boolean;

    constructor(private serviceService: ServicesService, private notificationService: NotificationService) {
        this.disableToggle = false;
    }

    startService(service: Service) {
        this.disableToggle = true;
        console.log('starting service: ' + service.name + '...');
        this.serviceService.startService(service).subscribe((data: IData) => {
            // console.log(data);
            if (data.error) {
                this.notificationService.send('Error occurred while stopping service: ' + service.name);
            }
            if (data.response) {
                if (data.response.length >= 1) {
                    this.disableToggle = false;
                    this.services[service.id].activated = true;
                    this.notificationService.send('Service ' + service.name + ' started.');
                }
            } else {
                this.notificationService.send('Error something went wrong');
            }
        }, (error: any) => {
            console.log(error);
        });
    }

    stopService(service: Service) {
        this.disableToggle = true;
        console.log('stopping service: ' + service.name + '...');
        this.serviceService.stopService(service).subscribe((data: IData) => {
            // console.log(data);
            if (data.error) {
                this.notificationService.send('Error occurred while stopping service: ' + service.name);
            }
            if (data.response) {
                if (data.response.length >= 1) {
                    this.disableToggle = false;
                    this.notificationService.send('Service ' + service.name + ' stopped.');
                }
            } else {
                this.notificationService.send('Error something went wrong');
            }
        }, (error: any) => {
            console.log(error);
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
