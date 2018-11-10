import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  dailyForecast(){
    return this.http.get("https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&amp;id=1261481&amp;units=metric");
  };

}
