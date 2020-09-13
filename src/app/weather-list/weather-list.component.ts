import { Component, ElementRef, ViewChild } from '@angular/core';
import { City, Coordinate, TemperatureInfo, WeatherStatus } from '../shared/models/city.model';
// TASK: 2 - Added an import for the global constants.
import { GlobalConstants } from '../shared/global-constants'

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {
  // TASK: 2 - Set the name for the page to control button visibility.
  pageName: string = GlobalConstants.weatherPageName;

    @ViewChild('cityName')
    public cityName: ElementRef;
    // TASK: 6 - Add variables for the rest of the input fields.
    @ViewChild('minimumTemperature')
    public minimumTemperature: ElementRef;
    @ViewChild('maximumTemperature')
    public maximumTemperature: ElementRef;
    @ViewChild('currentTemperature')
    public currentTemperature: ElementRef;

    // Please do not change these values.
    readonly exampleMinimumTemperature = 0;
    readonly exampleMaximumTemperature = 10;
    // TASK: 6 - Add a default value for the current temperature input field.
    readonly exampleCurrentTemperature = 0;
    ////////////////////////////////////////

    exampleTemperature = 0;

    // Please do not remove any of the default sample data below.
    sampleData: City[] = [
        {
            name: 'London',
            coord: new Coordinate(0, 0),
            weather: new WeatherStatus('Heavy rain', 'Heavy rain for most of today, humid conditions'),
            main: new TemperatureInfo(22, 1, 67)
        },
        {
            name: 'Liverpool',
            coord: new Coordinate(0, 0),
            weather: new WeatherStatus('Warm but overcast', 'Overcast with hints of rain later today.'),
            main: new TemperatureInfo(16, 1, 35)
        },
        {
            name: 'Singapore',
            coord: new Coordinate(0, 0),
            weather: new WeatherStatus('Very hot', 'Hot sunny weather in Singapore'),
            main: new TemperatureInfo(31, 1, 99)
        }
    ];

    addCity(): void {
        let city = new City();
        city.name = this.cityName.nativeElement.value;
        city.coord = new Coordinate(0, 0);
        city.weather = new WeatherStatus('Test', 'Test');
        city.main = new TemperatureInfo(
            // TASK: 6 - Use the values from the input fields.
            this.currentTemperature.nativeElement.value,
            this.minimumTemperature.nativeElement.value,
            this.maximumTemperature.nativeElement.value);
        // TASK: 6 - Push the new city into the dataset.
        this.sampleData.push(city);
        // TASK: 6 - Reset the input fields to their default.
        this.resetInputValues();
    }

    // TASK: 6 - Add method to reset the input fields.
    resetInputValues(): void {
        this.cityName.nativeElement.value = '';
        this.currentTemperature.nativeElement.value = this.exampleCurrentTemperature;
        this.minimumTemperature.nativeElement.value = this.exampleMinimumTemperature;
        this.maximumTemperature.nativeElement.value = this.exampleMaximumTemperature;
    }

    // TASK: 6 - Add method to delete a city.
    deleteCity(city: City): void {
        let index = this.sampleData.indexOf(city);

        if (index > -1) {
            this.sampleData.splice(index, 1);
        }
    }
}
