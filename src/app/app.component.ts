import { Component , OnInit} from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private weather : WeatherService){}

  
  
  
    ngOnInit() {
      this.getWeather();
    }
    getWeather() {
      this.weather = {} as any;
      this.weather.getCurrentWeather().subscribe((data) => {
        this.weather = data;
      });
    }
  }
  
