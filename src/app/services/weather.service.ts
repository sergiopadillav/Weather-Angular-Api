import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

apiKey = "bd7c41bb20d9fef7c65775a353e07b94";
  URI: string = ``;

  constructor(private httpClient: HttpClient) {
      this.URI = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
   }

   getWeather(cityName: string, countryCode: string){
     return this.httpClient.get(`${this.URI}${cityName},${countryCode}`)
   }
}
