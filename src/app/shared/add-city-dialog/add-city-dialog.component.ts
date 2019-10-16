import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-add-city-dialog',
    templateUrl: './add-city-dialog.component.html',
    styleUrls: ['./add-city-dialog.component.css']
})
export class AddCityDialogComponent implements OnInit {
    name: string;

    constructor(public dialogRef: MatDialogRef<AddCityDialogComponent>,
        private sharedService: SharedService) { }

    ngOnInit() { }

    save() {
        this.sharedService.addCity(this.name)
            .subscribe(id => {
                this.dialogRef.close(id);
            });
    }
}
