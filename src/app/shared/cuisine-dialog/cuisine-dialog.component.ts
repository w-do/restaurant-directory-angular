import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-cuisine-dialog',
    templateUrl: './cuisine-dialog.component.html',
    styleUrls: ['./cuisine-dialog.component.css']
})
export class CuisineDialogComponent implements OnInit {
    name: string;

    constructor(public dialogRef: MatDialogRef<CuisineDialogComponent>,
        private sharedService: SharedService) { }

    ngOnInit() {
        this.dialogRef.updateSize('300px');
    }

    save() {
        this.sharedService.addCuisine(this.name)
            .subscribe(id => {
                this.dialogRef.close(id);
            });
    }
}
