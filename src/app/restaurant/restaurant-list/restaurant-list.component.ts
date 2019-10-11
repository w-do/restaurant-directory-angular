import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    columns: string[];
    restaurants: MatTableDataSource<Restaurant>;

    constructor(private restaurantService: RestaurantService) {
        this.columns = ['edit', 'tried', 'name', 'cuisine', 'parkingLot', 'notes'];
    }

    ngOnInit() {
        this.restaurantService.getRestaurants()
            .subscribe(restaurants => {
                this.restaurants = new MatTableDataSource(restaurants);
                this.restaurants.sort = this.sort;
            });
    }
}
