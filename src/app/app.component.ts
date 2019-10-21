import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageCityDialogComponent } from './shared/manage-city-dialog/manage-city-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'restaurant-directory-angular';

    constructor(private dialog: MatDialog) { }

    manageCities() {
        this.dialog.open(ManageCityDialogComponent, { width: '400px' });
    }
}
