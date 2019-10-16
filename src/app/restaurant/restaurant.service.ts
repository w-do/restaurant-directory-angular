import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfigService } from '../app-config.service';
import { RestaurantEdit } from './models/restaurant-edit.model';
import { RestaurantView } from './models/restaurant-view.model';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private url: string;

    constructor(appConfig: AppConfigService, private http: HttpClient) {
        this.url = appConfig.get('apiUrl') + '/restaurant';
    }

    addRestaurant(restaurant: RestaurantEdit): Observable<number> {
        return this.http.post(this.url, restaurant)
            .pipe(
                map(response => <number>response),
                catchError(this.throw)
            );
    }

    getRestaurant(id: number): Observable<RestaurantEdit> {
        return this.http.get(this.url + '/' + id)
            .pipe(
                map(response => <RestaurantEdit>response),
                catchError(this.throw)
            );
    }

    getRestaurants(): Observable<RestaurantView[]> {
        return this.http.get(this.url)
            .pipe(
                map(response => <RestaurantView[]>response),
                catchError(this.throw)
            );
    }

    private throw(error: any): Observable<never> {
        console.log(error);
        return throwError(error);
    }
}
