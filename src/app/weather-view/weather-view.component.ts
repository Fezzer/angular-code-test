import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalConstants } from '../shared/global-constants';
import { CityApi } from '../shared/models/city-api.model';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {
  pageName: string = GlobalConstants.weatherViewPageName;
  profileForm: FormGroup = new FormGroup({
    search: new FormControl('')
  });
  
  city: CityApi;
  errorMessage: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.getWeather(this.profileForm.controls['search'].value);
  }

  getWeather(cityName: string): void {
    this.weatherService.getCityWeather(cityName).subscribe({
      next: city => {
        this.city = city;
      },
      error: err => this.errorMessage = err
    });
  }
}
