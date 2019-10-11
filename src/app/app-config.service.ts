import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    private appConfig;

    constructor(private httpClient: HttpClient) {}

    get(property: string) {
        return this.appConfig[property];
    }

    load() {
        return this.httpClient.get('./assets/app-config.json')
            .toPromise()
            .then(config => {
                this.appConfig = config;
            });
    }
}
