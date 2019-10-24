import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CuisineDialogComponent } from '../cuisine-dialog/cuisine-dialog.component';
import { Cuisine } from '../models/cuisine.model';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-manage-cuisines-dialog',
    templateUrl: './manage-cuisines-dialog.component.html',
    styleUrls: ['./manage-cuisines-dialog.component.css']
})
export class ManageCuisinesDialogComponent implements OnInit {
    cuisines: Cuisine[];
    columns: string[];

    constructor(public dialogRef: MatDialogRef<ManageCuisinesDialogComponent>,
        private dialog: MatDialog,
        private sharedService: SharedService) {
        this.columns = ['actions', 'name'];
    }

    ngOnInit() {
        this.dialogRef.updateSize('400px');
        this.getCuisines();
    }

    add() {
        this.dialog.open(CuisineDialogComponent, { data: null })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.getCuisines();
                }
            });
    }

    delete(id: number) {
        this.sharedService.getCuisineRestaurants(id)
            .subscribe(restaurants => {
                let config = {
                    data: {
                        body: 'Are you sure you want to delete this cuisine?',
                        confirmColor: 'warn',
                        confirmText: 'Delete',
                        title: 'Confirm deletion'
                    },
                    width: '400px'
                };

                if (restaurants.length > 0) {
                    config.data.body += ' This will remove the cuisine from ';
                    config.data.body += restaurants.length > 4
                        ? '5 or more restaurants.'
                        : restaurants.length + ' restaurant(s).';
                }

                this.dialog.open(ConfirmDialogComponent, config)
                    .afterClosed()
                    .subscribe(result => {
                        if (result) {
                            this.sharedService.deleteCuisine(id)
                                .subscribe(() => this.getCuisines());
                        }
                    });
            });
    }

    update(id: number) {
        this.dialog.open(CuisineDialogComponent, { data: id })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.getCuisines();
                }
            });
    }

    private getCuisines() {
        this.sharedService.getCuisines()
            .subscribe(cuisines => this.cuisines = cuisines);
    }
}
