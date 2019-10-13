import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfigService } from '../app-config.service';
import { City } from './models/city.model';
import { Cuisine } from './models/cuisine.model';

@Injectable()
export class SharedService {
    private url: string;

    constructor(appConfig: AppConfigService, private http: HttpClient) {
        this.url = appConfig.get('apiUrl');
    }

    getCities(): Observable<City[]> {
        return this.http.get(this.url + '/city')
            .pipe(
                map(response => <City[]>response),
                catchError(response => {
                    console.log(response);
                    return throwError(response);
                })
            );
    }

    getCuisines(): Observable<Cuisine[]> {
        return this.http.get(this.url + '/cuisine')
            .pipe(
                map(response => <Cuisine[]>response),
                catchError(response => {
                    console.log(response);
                    return throwError(response);
                })
            );
    }
}
