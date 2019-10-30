import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
    cities: City[];
    columns: string[];
    private change: boolean;

    constructor(private dialog: MatDialog,
        private dialogRef: MatDialogRef<ManageCitiesDialogComponent>,
        private sharedService: SharedService) {
        this.change = false;
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

    close() {
        this.dialogRef.close(this.change);
    }

    delete(id: string) {
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
                                .subscribe(() => {
                                    this.change = true;
                                    this.getCities();
                                });
                        }
                    });
            });
    }

    update(id: string) {
        this.dialog.open(CityDialogComponent, { data: id })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.change = true;
                    this.getCities();
                }
            });
    }

    private getCities() {
        this.sharedService.getCities()
            .subscribe(cities => this.cities = cities);
    }
}
