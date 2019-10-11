import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';

@NgModule({
    declarations: [RestaurantListComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatSortModule,
        MatTableModule,
        RestaurantRoutingModule
    ]
})
export class RestaurantModule { }
