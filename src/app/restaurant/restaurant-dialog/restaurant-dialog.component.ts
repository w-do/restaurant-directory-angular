import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CityDialogComponent } from '../../shared/city-dialog/city-dialog.component';
import { CuisineDialogComponent } from '../../shared/cuisine-dialog/cuisine-dialog.component';
import { City } from '../../shared/models/city.model';
import { Cuisine } from '../../shared/models/cuisine.model';
import { SharedService } from '../../shared/shared.service';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
    selector: 'app-restaurant-dialog',
    templateUrl: './restaurant-dialog.component.html',
    styleUrls: ['./restaurant-dialog.component.css']
})
export class RestaurantDialogComponent implements OnInit {
    cities: City[];
    cuisines: Cuisine[];
    restaurant: Restaurant;

    constructor(public dialogRef: MatDialogRef<RestaurantDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public id: string,
        private dialog: MatDialog,
        private restaurantService: RestaurantService,
        private sharedService: SharedService) {
        this.cities = [];
        this.cuisines = [];
        this.restaurant = new Restaurant();
    }

    ngOnInit() {
        this.dialogRef.updateSize('400px');
        this.getCities();
        this.getCuisines();

        if (this.id !== null) {
            this.restaurantService.getRestaurant(this.id)
                .subscribe(restaurant => this.restaurant = restaurant);
        }
    }

    addCity() {
        this.dialog.open(CityDialogComponent, { data: null })
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

        this.dialog.open(CuisineDialogComponent)
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.restaurant.cuisineIds.push(result);
                    this.getCuisines();
                }
            });
    }

    save() {
        let request: Observable<any> = this.id === null
            ? this.restaurantService.addRestaurant(this.restaurant)
            : this.restaurantService.updateRestaurant(this.id, this.restaurant);

        request.subscribe(() => this.dialogRef.close(true));
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
