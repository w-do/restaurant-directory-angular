import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class ConfirmConfigData {
    body: string;
    cancelText?: string;
    confirmColor?: string;
    confirmText?: string;
    title: string;
}

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
    public config: ConfirmConfigData;

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) config: ConfirmConfigData) {
        if (!config.cancelText) {
            config.cancelText = 'Cancel';
        }
        if (!config.confirmColor) {
            config.confirmColor = 'primary';
        }
        if (!config.confirmText) {
            config.confirmText = 'Confirm';
        }

        this.config = config;
    }

    ngOnInit() { }
}
