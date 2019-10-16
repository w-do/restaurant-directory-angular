import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddCityDialogComponent } from '../../shared/add-city-dialog/add-city-dialog.component';
import { AddCuisineDialogComponent } from '../../shared/add-cuisine-dialog/add-cuisine-dialog.component';
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
        private dialog: MatDialog,
        private restaurantService: RestaurantService,
        private sharedService: SharedService) {
        this.cities = [];
        this.cuisines = [];
        this.restaurant = new RestaurantEdit();
    }

    ngOnInit() {
        this.getCities();
        this.getCuisines();

        if (this.id !== null) {
            this.restaurantService.getRestaurant(this.id)
                .subscribe(restaurant => this.restaurant = restaurant);
        }
    }

    addCity() {
        this.dialog.open(AddCityDialogComponent, { width: '300px' })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.restaurant.cityId = result;
                    this.getCities();
                }
            });
    }

    addCuisine() {
        this.restaurant.cuisineIds = this.restaurant.cuisineIds.filter(x => x !== null);

        this.dialog.open(AddCuisineDialogComponent, { width: '300px' })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.restaurant.cuisineIds.push(result);
                    this.getCuisines();
                }
            });
    }

    save() {
        this.restaurantService.addRestaurant(this.restaurant)
            .subscribe(() => this.dialogRef.close(true));
    }

    private getCities() {
        this.sharedService.getCities()
            .subscribe(cities => this.cities = cities);
    }

    private getCuisines() {
        this.sharedService.getCuisines()
            .subscribe(cuisines => this.cuisines = cuisines);
    }
}
