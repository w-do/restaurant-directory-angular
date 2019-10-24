import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageCitiesDialogComponent } from './shared/manage-cities-dialog/manage-cities-dialog.component';
import { ManageCuisinesDialogComponent } from './shared/manage-cuisines-dialog/manage-cuisines-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'restaurant-directory-angular';

    constructor(private dialog: MatDialog) { }

    manageCities() {
        this.dialog.open(ManageCitiesDialogComponent);
    }

    manageCuisines() {
        this.dialog.open(ManageCuisinesDialogComponent);
    }
}
