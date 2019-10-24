import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Cuisine } from '../models/cuisine.model';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-cuisine-dialog',
    templateUrl: './cuisine-dialog.component.html',
    styleUrls: ['./cuisine-dialog.component.css']
})
export class CuisineDialogComponent implements OnInit {
    cuisine: Cuisine;
    name: string;

    constructor(public dialogRef: MatDialogRef<CuisineDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public id: number,
        private sharedService: SharedService) {
        this.cuisine = new Cuisine();
    }

    ngOnInit() {
        this.dialogRef.updateSize('300px');

        if (this.id !== null) {
            this.sharedService.getCuisine(this.id)
                .subscribe(cuisine => {
                    this.cuisine = cuisine;
                    this.name = cuisine.name;
                });
        }
    }

    save() {
        let request: Observable<any> = this.id === null
            ? this.sharedService.addCuisine(this.cuisine.name)
            : this.sharedService.updateCuisine(this.id, this.cuisine.name);

        request.subscribe(result => this.dialogRef.close(this.id === null ? result : true));
    }
}
