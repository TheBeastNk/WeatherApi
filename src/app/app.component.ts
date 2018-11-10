import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  data : any;
  icon :string = "https://openweathermap.org/img/w/";
  
  constructor(private weather: WeatherService){}
  ngOnInit(){
    this.weather.dailyForecast()
    .subscribe(res => this.data = res
    )
  }

  convertUnixTime(val:any) :any{

   let unix = 1541828979;
   let date = new Date(unix*1000);
   return date;

  }

}
  
