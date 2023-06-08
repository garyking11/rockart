import { Injectable } from '@angular/core';
import {Observable, retry} from "rxjs";
import {HomeInterface} from "../home/home.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AdminInterface, Regions} from "../admin/admin.interface";

@Injectable({
  providedIn: 'root'
})
export class GetRegionsService {

  private regionsUrl = 'assets/data/regions.json';

  constructor(
    private http: HttpClient,
    // private httpHeaders: HttpHeaders
  ) {
  }

  getRegions(): Observable<any> {
    console.log('regions in service')
    return this.http.get<any>(this.regionsUrl);
  }

  getLocations(): Observable<any> {
    console.log('locations in service')
    return this.http.get<any>(this.regionsUrl);
  }

  // send to endpoint
  sendRegion(region: { regionLink: Regions[]; location: Regions[]; image: Regions[]; }){
    console.log(region);
    const body = JSON.stringify(region);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    return this.http.post(this.regionsUrl, body, {headers: httpHeaders});
  }
  }


