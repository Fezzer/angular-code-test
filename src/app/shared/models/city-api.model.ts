
// Model that gets returned by the OpenWeather API
export class CityApi {
    // Assume that name is a unique field.
    public name: string;
    public coord: Coordinate;
    public weather: WeatherStatus[];
    public main: TemperatureInfo;
}

export class Coordinate {
    constructor(public lat: number, public lon: number) {}
}

export class WeatherStatus {
    constructor(public main: string, public description: string) {}
}

export class TemperatureInfo {
    constructor(public temp: number,
                public temp_min: number,
                public temp_max: number) {}
}
