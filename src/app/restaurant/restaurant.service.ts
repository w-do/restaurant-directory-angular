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

    getRestaurant(id: number): Observable<RestaurantEdit> {
        return this.http.get(this.url + '/' + id)
            .pipe(
                map(response => <RestaurantEdit>response),
                catchError(response => {
                    console.log(response);
                    return throwError(response);
                })
            );
    }

    getRestaurants(): Observable<RestaurantView[]> {
        return this.http.get(this.url)
            .pipe(
                map(response => <RestaurantView[]>response),
                catchError(response => {
                    console.log(response);
                    return throwError(response);
                })
            );
    }
}
