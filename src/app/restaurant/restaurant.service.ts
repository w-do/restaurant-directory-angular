import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfigService } from '../app-config.service';
import { RestaurantView } from './models/restaurant-view.model';
import { Restaurant } from './models/restaurant.model';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private url: string;

    constructor(appConfig: AppConfigService, private http: HttpClient) {
        this.url = appConfig.get('apiUrl') + '/restaurant';
    }

    addRestaurant(restaurant: Restaurant): Observable<number> {
        return this.http.post(this.url, restaurant)
            .pipe(
                map(response => <number>response),
                catchError(this.throw)
            );
    }

    getRestaurant(id: number): Observable<Restaurant> {
        return this.http.get(this.url + '/' + id)
            .pipe(
                map(response => <Restaurant>response),
                catchError(this.throw)
            );
    }

    getRestaurants(filter: any): Observable<RestaurantView[]> {
        return this.http.get(this.url, { params: this.toParams(filter) })
            .pipe(
                map(response => <RestaurantView[]>response),
                catchError(this.throw)
            );
    }

    updateRestaurant(id: number, restaurant: Restaurant): Observable<Response> {
        return this.http.put(this.url + '/' + id, restaurant)
            .pipe(
                map(response => <Response>response),
                catchError(this.throw)
            );
    }

    private throw(error: any): Observable<never> {
        console.log(error);
        return throwError(error);
    }

    private toParams(object: any): HttpParams {
        let params = new HttpParams();

        for (let prop in object) {
            let propVal = object[prop];

            if (Array.isArray(propVal)) {
                propVal.forEach(x => params = params.append(prop, x));
            } else if (propVal !== null && propVal !== undefined) {
                params = params.set(prop, propVal);
            }
        }

        return params;
    }
}
