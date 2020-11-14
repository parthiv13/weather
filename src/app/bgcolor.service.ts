import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BgcolorService {

  constructor() { }

  midNight: string[] = ["#072549", "#000207"];
  sunRise: string[] = ["#6E4679", "#FA693A"];
  morning: string[] = ["#DDB5FC", "#FCAD98"];
  afternoon: string[] = ["#6AA6D8", "#F0AA90"];
  evening: string[] = ["#832212", "#DBB353"];
  sunset: string[] = ["#480F56", "#CC728A"];
  night: string[] = ["#19164F", "#6A4A86"];

  

  getBgColor(): string[] {
    let hourOfTheDay = new Date().getHours();
    if (hourOfTheDay < 6) {
      return this.midNight
    } else if (hourOfTheDay < 12) {
      return this.sunRise;
    } else if (hourOfTheDay < 16) {
      return this.afternoon;
    } else if (hourOfTheDay < 19) {
      return this.evening
    } else {
      return this.night;
    }
  }
}
