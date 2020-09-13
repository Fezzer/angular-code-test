import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityApi } from '../models/city-api.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
    private readonly apiKey = '602a04a9526ec225e2a43273cad62ba1';

    constructor(private httpClient: HttpClient) { }

    public getCityWeather(cityName: string): Observable<CityApi> {
        return this.httpClient.get<CityApi>(`${this.apiUrl}?q=${cityName}&appid=${this.apiKey}`);
    }
}
