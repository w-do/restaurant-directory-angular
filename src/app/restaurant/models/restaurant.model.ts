import { ParkingLot } from './parking-lot.enum';

export class Restaurant {
    id: string;
    cityId?: string;
    cuisineIds: string[];
    name: string;
    notes: string;
    parkingLot?: ParkingLot;
    tried: boolean;
    yelp: string;
}