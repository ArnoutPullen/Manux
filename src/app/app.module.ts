import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FileService } from './list/list.service';
import { Routes } from './app.routes';
import { ServicesComponent } from './services/services.component';
import { ServicesService } from './services/services.service';
import { NotificationService } from './notifications/notification.service';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        ServicesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        RouterModule.forRoot(Routes)
    ],
    providers: [FileService, ServicesService, NotificationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
