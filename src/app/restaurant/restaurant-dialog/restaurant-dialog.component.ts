import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { City } from '../../shared/models/city.model';
import { Cuisine } from '../../shared/models/cuisine.model';
import { SharedService } from '../../shared/shared.service';
import { RestaurantEdit } from '../models/restaurant-edit.model';
import { RestaurantService } from '../restaurant.service';

@Component({
    selector: 'app-restaurant-dialog',
    templateUrl: './restaurant-dialog.component.html',
    styleUrls: ['./restaurant-dialog.component.css']
})
export class RestaurantDialogComponent implements OnInit {
    cities: City[];
    cuisines: Cuisine[];
    restaurant: RestaurantEdit;

    constructor(public dialogRef: MatDialogRef<RestaurantDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public id: number,
        private restaurantService: RestaurantService,
        private sharedService: SharedService) {
        this.cities = [];
        this.cuisines = [];
        this.restaurant = new RestaurantEdit();
    }

    ngOnInit() {
        this.sharedService.getCities()
            .subscribe(cities => this.cities = cities);
        this.sharedService.getCuisines()
            .subscribe(cuisines => this.cuisines = cuisines);
        if (this.id !== null) {
            this.restaurantService.getRestaurant(this.id)
                .subscribe(restaurant => this.restaurant = restaurant);
        }
    }

    save() {
        this.restaurantService.addRestaurant(this.restaurant)
            .subscribe(() => this.dialogRef.close(true));
    }
}
