import { ParkingLot } from './parking-lot.enum';

export class RestaurantView {
    id: number;
    city: string;
    cuisines: string;
    name: string;
    notes: string;
    parkingLot: ParkingLot;
    tried: boolean;
    yelp: string;
}