import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-add-cuisine-dialog',
    templateUrl: './add-cuisine-dialog.component.html',
    styleUrls: ['./add-cuisine-dialog.component.css']
})
export class AddCuisineDialogComponent implements OnInit {
    name: string;

    constructor(public dialogRef: MatDialogRef<AddCuisineDialogComponent>,
        private sharedService: SharedService) { }

    ngOnInit() { }

    save() {
        this.sharedService.addCuisine(this.name)
            .subscribe(id => {
                this.dialogRef.close(id);
            });
    }
}
