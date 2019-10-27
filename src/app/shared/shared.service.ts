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

    addCity(cityName: string): Observable<string> {
        return this.http.post(this.url + '/city', { name: cityName })
            .pipe(
                map(response => <string>response),
                catchError(this.throw)
            );
    }

    addCuisine(cuisineName: string): Observable<string> {
        return this.http.post(this.url + '/cuisine', { name: cuisineName })
            .pipe(
                map(response => <string>response),
                catchError(this.throw)
            );
    }

    deleteCity(id: string): Observable<Response> {
        return this.http.delete(this.url + '/city/' + id)
            .pipe(
                map(response => <Response>response),
                catchError(this.throw)
            );
    }

    deleteCuisine(id: string): Observable<Response> {
        return this.http.delete(this.url + '/cuisine/' + id)
            .pipe(
                map(response => <Response>response),
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

    getCity(id: string): Observable<City> {
        return this.http.get(this.url + '/city/' + id)
            .pipe(
                map(response => <City>response),
                catchError(this.throw)
            );
    }

    getCityRestaurants(id: string): Observable<string[]> {
        return this.http.get(this.url + '/city/' + id + '/restaurants')
            .pipe(
                map(response => <string[]>response),
                catchError(this.throw)
            );
    }

    getCuisine(id: string): Observable<Cuisine> {
        return this.http.get(this.url + '/cuisine/' + id)
            .pipe(
                map(response => <Cuisine>response),
                catchError(this.throw)
            );
    }

    getCuisineRestaurants(id: string): Observable<string[]> {
        return this.http.get(this.url + '/cuisine/' + id + '/restaurants')
            .pipe(
                map(response => <string[]>response),
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

    updateCity(id: string, name: string): Observable<Response> {
        return this.http.put(this.url + '/city/' + id, { name: name })
            .pipe(
                map(response => <Response>response),
                catchError(this.throw)
            );
    }

    updateCuisine(id: string, name: string): Observable<Response> {
        return this.http.put(this.url + '/cuisine/' + id, { name: name })
            .pipe(
                map(response => <Response>response),
                catchError(this.throw)
            );
    }

    private throw(error: any): Observable<never> {
        console.log(error);
        return throwError(error);
    }
}
