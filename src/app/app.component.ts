import { Component, NgZone } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BgcolorService } from './bgcolor.service';
import * as moment from "moment";
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  search = faSearch;

  city: string = "Visakhapatnam"
  cityName: string = "Visakhapatnam";
  bgColor: string;
  date = this.getDate();
  time = this.getTimeOfTheDay();
  weather;

  constructor(
    private bgColorService: BgcolorService,
    private weatherService: WeatherService) {
    setInterval(() => {
      this.date = this.getDate();
      this.time = this.getTimeOfTheDay();
    }, 1000 * 60);
  }

  ngOnInit() {
    this.getTemp();
    this.getBgColor();
  }

  getDate() {
    return moment().format("dddd, D MMM 'YY");
  }

  getTimeOfTheDay() {
    return moment().format("LT");
  }

  //TODO: errorHandling
  //TODO: create response Object
  getTemp() {
    this.weatherService.getTemperature(this.cityName).subscribe(w => {
      if (w.main === undefined) {
        this.weatherService.getTemperature("Visakhapatnam").subscribe(weather => this.weather = weather.main.temp)
      } else {
        this.weather = w.main.temp;
        this.city = this.cityName;
        this.cityName = '';
      }
    });
  }

  getBgColor() {
    let bgColors = this.bgColorService.getBgColor();
    this.bgColor = "linear-gradient(" + bgColors[0] + " ," + bgColors[1] + ")";
  }
}
