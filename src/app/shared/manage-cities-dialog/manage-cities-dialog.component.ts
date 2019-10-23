import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CityDialogComponent } from '../city-dialog/city-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { City } from '../models/city.model';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-manage-cities-dialog',
    templateUrl: './manage-cities-dialog.component.html',
    styleUrls: ['./manage-cities-dialog.component.css']
})
export class ManageCitiesDialogComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    cities: MatTableDataSource<City>;
    columns: string[];

    constructor(public dialogRef: MatDialogRef<ManageCitiesDialogComponent>,
        private dialog: MatDialog,
        private sharedService: SharedService) {
        this.columns = ['actions', 'name'];
    }

    ngOnInit() {
        this.dialogRef.updateSize('400px');
        this.getCities();
    }

    add() {
        this.dialog.open(CityDialogComponent, { data: null })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.getCities();
                }
            });
    }

    delete(id: number) {
        this.sharedService.getCityRestaurants(id)
            .subscribe(restaurants => {
                let config = {
                    data: {
                        body: 'Are you sure you want to delete this city?',
                        confirmColor: 'warn',
                        confirmText: 'Delete',
                        title: 'Confirm deletion'
                    },
                    width: '400px'
                };

                if (restaurants.length > 0) {
                    config.data.body += ' This will clear the city data for ';
                    config.data.body += restaurants.length > 4
                        ? '5 or more restaurants.'
                        : restaurants.length + ' restaurant(s).';
                }

                this.dialog.open(ConfirmDialogComponent, config)
                    .afterClosed()
                    .subscribe(result => {
                        if (result) {
                            this.sharedService.deleteCity(id)
                                .subscribe(() => this.getCities());
                        }
                    });
            });
    }

    update(id: number) {
        this.dialog.open(CityDialogComponent, { data: id })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.getCities();
                }
            });
    }

    private getCities() {
        this.sharedService.getCities()
            .subscribe(cities => {
                this.cities = new MatTableDataSource(cities);
                this.cities.sort = this.sort;
            });
    }
}
