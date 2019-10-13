import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        RestaurantRoutingModule
    ],
    providers: [SharedService]
})
export class RestaurantModule { }
