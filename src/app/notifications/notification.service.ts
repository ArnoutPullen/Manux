import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {

    constructor(private snackBar: MatSnackBar) {
    }

    notification(message: string, action?: string) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
}
