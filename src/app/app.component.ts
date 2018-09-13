import { Component } from '@angular/core';
import { Routes } from './app.routes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Manux';
    opened: boolean;
    routes = Routes;
}
