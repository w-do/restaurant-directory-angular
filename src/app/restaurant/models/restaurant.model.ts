import { ParkingLot } from './parking-lot.enum';

export class Restaurant {
    id: string;
    city: string;
    cuisine: any[];
    name: string;
    notes: string;
    parkingLot: ParkingLot;
    tried: boolean;
    yelp: string;
}