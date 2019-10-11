import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Restaurant } from './models/restaurant.model';

const RESTAURANT_DATA: Restaurant[] = [
    { id: '0', city: 'Ann Arbor', cuisine: [], name: 'Frida Batidos', notes: '', parkingLot: 0, tried: true, yelp: 'https://www.yelp.com/biz/frita-batidos-ann-arbor' },
    { id: '1', city: 'Ypsilanti', cuisine: [], name: 'Caspian Mediterranean Grill', notes: '', parkingLot: 2, tried: false, yelp: 'https://www.yelp.com/biz/caspian-mediterranean-grill-ypsilanti-3' },
    { id: '2', city: 'Madison Heights', cuisine: [], name: 'Detroit Pho Crab', notes: '', parkingLot: 1, tried: true, yelp: '' },
    { id: '3', city: 'Dearborn', cuisine: [], name: 'Hamido', notes: '', parkingLot: 1, tried: true, yelp: '' },
    { id: '4', city: 'Ann Arbor', cuisine: [], name: 'Yoon\'s Bakery', notes: 'custard bread', parkingLot: null, tried: true, yelp: 'https://www.yelp.com/biz/yoons-bakery-ann-arbor' },
    { id: '5', city: 'Ann Arbor', cuisine: [], name: 'Zingerman\'s Delicatessen', notes: '', parkingLot: 0, tried: true, yelp: '' }
];

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private url: string;

    constructor(appConfig: AppConfigService) {
        this.url = appConfig.get('apiUrl');
    }

    getRestaurants(): Observable<Restaurant[]> {
        return Observable.create(observer => {
            observer.next(RESTAURANT_DATA);
            observer.complete();
        });
    }
}
