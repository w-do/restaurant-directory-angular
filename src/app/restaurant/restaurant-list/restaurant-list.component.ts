import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Restaurant } from '../models/restaurant.model';

const RESTAURANT_DATA: Restaurant[] = [
    { id: '0', city: 'Ann Arbor', cuisine: [], name: 'Frida Batidos', notes: '', parkingLot: 0, tried: true, yelp: 'https://www.yelp.com/biz/frita-batidos-ann-arbor' },
    { id: '1', city: 'Ypsilanti', cuisine: [], name: 'Caspian Mediterranean Grill', notes: '', parkingLot: 2, tried: false, yelp: 'https://www.yelp.com/biz/caspian-mediterranean-grill-ypsilanti-3' },
    { id: '2', city: 'Madison Heights', cuisine: [], name: 'Detroit Pho Crab', notes: '', parkingLot: 1, tried: true, yelp: '' },
    { id: '3', city: 'Dearborn', cuisine: [], name: 'Hamido', notes: '', parkingLot: 1, tried: true, yelp: '' },
    { id: '4', city: 'Ann Arbor', cuisine: [], name: 'Yoon\'s Bakery', notes: 'custard bread', parkingLot: null, tried: true, yelp: 'https://www.yelp.com/biz/yoons-bakery-ann-arbor' },
    { id: '5', city: 'Ann Arbor', cuisine: [], name: 'Zingerman\'s Delicatessen', notes: '', parkingLot: 0, tried: true, yelp: '' }
];

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    columns: string[];
    restaurants: MatTableDataSource<Restaurant>;

    constructor() {
        this.columns = ['edit', 'tried', 'name', 'cuisine', 'parkingLot', 'notes'];
        this.restaurants = new MatTableDataSource(RESTAURANT_DATA);
    }

    ngOnInit() {
        this.restaurants.sort = this.sort;
    }
}
