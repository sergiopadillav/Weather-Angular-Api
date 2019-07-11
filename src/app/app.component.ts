import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 location = { cityName: 'London', countryCode: 'uk' };
  weather;

  constructor(private weatherService: WeatherService) { }

  //apenas carge el componente esto se hace
  ngOnInit(){
     this.getWeather(this.location.cityName, this.location.countryCode);
  }

  getWeather(cityName: string, cityCode: string){
    this.weatherService
      .getWeather(cityName,cityCode)
      .subscribe(
        res =>  {
          this.weather = res;
          console.log(this.weather);
        },
        err => {
          alert('No se encontro la ciudad');
        }
      );
  }

  submitLocation(cityName: HTMLInputElement, cityCode: HTMLInputElement){
    if (cityName.value && cityCode.value) {
      this.getWeather(cityName.value, cityCode.value,);

      cityName.value = '';
      cityCode.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }
}
