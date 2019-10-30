import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ChangeNotificationService } from 'src/app/shared/change-notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { City } from '../../shared/models/city.model';
import { Cuisine } from '../../shared/models/cuisine.model';
import { SharedService } from '../../shared/shared.service';
import { RestaurantView } from '../models/restaurant-view.model';
import { RestaurantDialogComponent } from '../restaurant-dialog/restaurant-dialog.component';
import { RestaurantService } from '../restaurant.service';

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit, OnDestroy {
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    cities: City[];
    columns: string[];
    cuisines: Cuisine[];
    filter: any;
    filterIsActive: boolean;
    filterIsVisible: boolean;
    restaurants: MatTableDataSource<RestaurantView>;
    private changeSubscription: Subscription;

    constructor(private changeNotificationService: ChangeNotificationService,
        private dialog: MatDialog,
        private restaurantService: RestaurantService,
        private sharedService: SharedService) {
        this.columns = ['actions', 'tried', 'name', 'city', 'cuisines', 'parkingLot', 'notes'];
        this.filter = {};
    }

    ngOnInit() {
        this.getRestaurants();
        this.changeSubscription = this.changeNotificationService.getChange()
            .subscribe(change => {
                if (change) {
                    this.getRestaurants();
                }
            });
    }

    ngOnDestroy() {
        this.changeSubscription.unsubscribe();
    }

    applyFilters() {
        this.filterIsActive = true;
        this.getRestaurants();
    }

    clearFilters() {
        this.filter = {};
        this.filterIsActive = false;
        this.getRestaurants();
    }

    delete(id: string) {
        let config = {
            data: {
                body: 'Are you sure you want to delete this restaurant?',
                confirmColor: 'warn',
                confirmText: 'Delete',
                title: 'Confirm Delete'
            },
            width: '400px'
        };

        this.dialog.open(ConfirmDialogComponent, config)
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.restaurantService.deleteRestaurant(id)
                        .subscribe(() => {
                            this.getRestaurants();
                        });
                }
            });
    }

    openDialog(id: string) {
        this.dialog.open(RestaurantDialogComponent, { data: id })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.getRestaurants();
                }

                this.getCitiesAndCuisines();
            });
    }

    toggleFilter() {
        this.filterIsVisible = !this.filterIsVisible;

        if (this.filterIsVisible) {
            this.getCitiesAndCuisines();
        }
    }

    private getCitiesAndCuisines() {
        this.sharedService.getCities()
            .subscribe(cities => this.cities = cities);
        this.sharedService.getCuisines()
            .subscribe(cuisines => this.cuisines = cuisines);
    }

    private getRestaurants() {
        this.restaurantService.getRestaurants(this.filterIsActive ? this.filter : null)
            .subscribe(restaurants => {
                this.restaurants = new MatTableDataSource(restaurants);
                this.restaurants.sort = this.sort;
            });
    }
}
