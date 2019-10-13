import { ParkingLot } from './parking-lot.enum';

export class RestaurantEdit {
    id: number;
    cityId?: number;
    cuisineIds: number[];
    name: string;
    notes: string;
    parkingLot?: ParkingLot;
    tried: boolean;
    yelp: string;
}