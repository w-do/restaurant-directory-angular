import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { City } from '../models/city.model';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-manage-city-dialog',
    templateUrl: './manage-city-dialog.component.html',
    styleUrls: ['./manage-city-dialog.component.css']
})
export class ManageCityDialogComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    cities: MatTableDataSource<City>;
    columns: string[];

    constructor(public dialogRef: MatDialogRef<ManageCityDialogComponent>,
        private sharedService: SharedService) {
        this.columns = ['actions', 'name'];
    }

    ngOnInit() {
        this.getCities();
    }

    private getCities() {
        this.sharedService.getCities()
            .subscribe(cities => {
                this.cities = new MatTableDataSource(cities);
                this.cities.sort = this.sort;
            });
    }
}
