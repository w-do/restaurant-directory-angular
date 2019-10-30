import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeNotificationService } from './shared/change-notification.service';
import { ManageCitiesDialogComponent } from './shared/manage-cities-dialog/manage-cities-dialog.component';
import { ManageCuisinesDialogComponent } from './shared/manage-cuisines-dialog/manage-cuisines-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private changeNotificationService: ChangeNotificationService,
        private dialog: MatDialog) { }

    manageCities() {
        this.dialog.open(ManageCitiesDialogComponent, { hasBackdrop: false })
            .afterClosed()
            .subscribe(change => {
                if (change) {
                    this.changeNotificationService.notify();
                }
            });
    }

    manageCuisines() {
        this.dialog.open(ManageCuisinesDialogComponent, { hasBackdrop: false })
            .afterClosed()
            .subscribe(change => {
                if (change) {
                    this.changeNotificationService.notify();
                }
            });
    }
}
