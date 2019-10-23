import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigService } from './app-config.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCuisineDialogComponent } from './shared/add-cuisine-dialog/add-cuisine-dialog.component';
import { CityDialogComponent } from './shared/city-dialog/city-dialog.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { ManageCitiesDialogComponent } from './shared/manage-cities-dialog/manage-cities-dialog.component';
import { SharedModule } from './shared/shared.module';

const initialize = (appConfig: AppConfigService) => () => appConfig.load();

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [
        AddCuisineDialogComponent,
        CityDialogComponent,
        ConfirmDialogComponent,
        ManageCitiesDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        SharedModule
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: initialize, multi: true, deps: [AppConfigService] }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
