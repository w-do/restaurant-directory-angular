import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AddCityDialogComponent } from './add-city-dialog/add-city-dialog.component';
import { AddCuisineDialogComponent } from './add-cuisine-dialog/add-cuisine-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ManageCityDialogComponent } from './manage-city-dialog/manage-city-dialog.component';

@NgModule({
    declarations: [
        AddCityDialogComponent,
        AddCuisineDialogComponent,
        ConfirmDialogComponent,
        ManageCityDialogComponent
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
