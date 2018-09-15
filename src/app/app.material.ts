import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatSnackBarModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatSnackBarModule,
    ],
})

export class MaterialModule {}
