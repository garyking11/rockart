import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {response} from 'express';

@Injectable({
  providedIn: 'root'
})
export class GetGoogleMapService {

  constructor(
    private http: HttpClient) {
  }

  getGoogleMap(url:string, lat:string, long:string){
    return this.http.get('url' +  'lat' + 'long',{responseType: 'text'});
  }
}



