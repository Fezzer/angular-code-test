import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherService } from './shared/services/weather.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
// TASK: 1 - Import of the card header component.
import { CardHeaderComponent } from './shared/components/card-header/card-header.component';
// TASK: 2 - Import of the card footer component.
import { CardFooterComponent } from './shared/components/card-footer/card-footer.component';
// TASK: 5 - Import of the test component.
import { TestComponent } from './test/test.component';
// TASK: 6 - Import of the weather list component.
import { WeatherViewComponent } from './weather-view/weather-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    WeatherListComponent,
    // TASK: 1 - Card header component added to the declarations.
    CardHeaderComponent,
    // TASK: 2 - Card footer component added to the declarations.
    CardFooterComponent,
    // TASK: 5 - Test component added to the declarations.
    TestComponent,
    // TASK: 6 - Weather list component added to the declarations.
    WeatherViewComponent     
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
