import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: 'list-weather', component: WeatherListComponent},
    // TASK: 5 - Add the test component to the routes.
    {path: 'test', component: TestComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
