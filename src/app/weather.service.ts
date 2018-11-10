import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  extractData: any;


  getCurrentWeather(): Observable<any> {
      const endpoint = 'https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=1261481&units=metric';
      return this.http.get(endpoint);
    }

}
