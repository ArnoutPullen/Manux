import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {

    constructor(private snackBar: MatSnackBar) {
    }

    success(message: string, action: string = null) {
        console.log(action);
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    }

    warning(message: string, action: string = null) {
        console.log(action);
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    }

    error(message: string, action: string = null) {
        console.log(action);
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    }
}
