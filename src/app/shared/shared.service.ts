import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfigService } from '../app-config.service';
import { City } from './models/city.model';
import { Cuisine } from './models/cuisine.model';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private url: string;

    constructor(appConfig: AppConfigService, private http: HttpClient) {
        this.url = appConfig.get('apiUrl');
    }

    addCity(cityName: string): Observable<number> {
        return this.http.post(this.url + '/city', { name: cityName })
            .pipe(
                map(response => <number>response),
                catchError(this.throw)
            );
    }

    addCuisine(cuisineName: string): Observable<number> {
        return this.http.post(this.url + '/cuisine', { name: cuisineName })
            .pipe(
                map(response => <number>response),
                catchError(this.throw)
            );
    }

    getCities(): Observable<City[]> {
        return this.http.get(this.url + '/city')
            .pipe(
                map(response => <City[]>response),
                catchError(this.throw)
            );
    }

    getCuisines(): Observable<Cuisine[]> {
        return this.http.get(this.url + '/cuisine')
            .pipe(
                map(response => <Cuisine[]>response),
                catchError(this.throw)
            );
    }

    private throw(error: any): Observable<never> {
        console.log(error);
        return throwError(error);
    }
}