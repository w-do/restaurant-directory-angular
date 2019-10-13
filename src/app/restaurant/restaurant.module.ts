import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SharedService } from '../shared/shared.service';
import { RestaurantDialogComponent } from './restaurant-dialog/restaurant-dialog.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';

@NgModule({
    declarations: [
        RestaurantListComponent,
        RestaurantDialogComponent
    ],
    entryComponents: [RestaurantDialogComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatSortModule,
        MatTableModule,
        RestaurantRoutingModule
    ],
    providers: [SharedService]
})
export class RestaurantModule { }
