import { ParkingLot } from './parking-lot.enum';

export class RestaurantView {
    id: string;
    city: string;
    cuisines: string;
    name: string;
    notes: string;
    parkingLot: ParkingLot;
    tried: boolean;
    yelp: string;
}