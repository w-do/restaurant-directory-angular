import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CityDialogComponent } from './city-dialog/city-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CuisineDialogComponent } from './cuisine-dialog/cuisine-dialog.component';
import { ManageCitiesDialogComponent } from './manage-cities-dialog/manage-cities-dialog.component';

@NgModule({
    declarations: [
        CityDialogComponent,
        ConfirmDialogComponent,
        CuisineDialogComponent,
        ManageCitiesDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule
    ]
})
export class SharedModule { }
