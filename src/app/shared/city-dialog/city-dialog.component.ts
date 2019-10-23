import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { City } from '../models/city.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-city-dialog',
    templateUrl: './city-dialog.component.html',
    styleUrls: ['./city-dialog.component.css']
})
export class CityDialogComponent implements OnInit {
    city: City;
    name: string;

    constructor(public dialogRef: MatDialogRef<CityDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public id: number,
        private sharedService: SharedService) {
        this.city = new City();
    }

    ngOnInit() {
        this.dialogRef.updateSize('300px');
        
        if (this.id !== null) {
            this.sharedService.getCity(this.id)
                .subscribe(city => {
                    this.city = city;
                    this.name = city.name;
                });
        }
    }

    save() {
        let request: Observable<any> = this.city.id === null
            ? this.sharedService.addCity(this.city.name)
            : this.sharedService.updateCity(this.city.id, this.city.name);

        request.subscribe(() => this.dialogRef.close(true));
    }
}
