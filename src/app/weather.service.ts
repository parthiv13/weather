import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private API_URL = "http://api.openweathermap.org/data/2.5/weather?appid=27bdd1127dbe26653b28463e0012ed42&units=metric&q="

  constructor(private http: HttpClient) {}

  getTemperature(city: string) {
    return this.http.get(this.API_URL + city);
  }
}
