import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'restaurant',
        loadChildren: () => import ('./restaurant/restaurant.module').then(m => m.RestaurantModule)
    },
    {
        path: '',
        redirectTo: 'restaurant/list',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }