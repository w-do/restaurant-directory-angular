import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestaurantView } from '../models/restaurant-view.model';
import { RestaurantDialogComponent } from '../restaurant-dialog/restaurant-dialog.component';
import { RestaurantService } from '../restaurant.service';

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    columns: string[];
    restaurants: MatTableDataSource<RestaurantView>;

    constructor(private dialog: MatDialog,
        private restaurantService: RestaurantService) {
        this.columns = ['edit', 'tried', 'name', 'city', 'cuisine', 'parkingLot', 'notes'];
    }

    ngOnInit() {
        this.getRestaurants();
    }

    getRestaurants() {
        this.restaurantService.getRestaurants()
            .subscribe(restaurants => {
                this.restaurants = new MatTableDataSource(restaurants);
                this.restaurants.sort = this.sort;
            });
    }

    openDialog(id: number) {
        this.dialog.open(RestaurantDialogComponent, { width: '400px', data: id })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.getRestaurants();
                }
            });
    }
}