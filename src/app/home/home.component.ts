import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from "@angular/cdk/drag-drop";
import {HomeInterface} from "./home.interface";
import {GetRegionsService} from "../services/get-regions.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeInterFace?: HomeInterface;
  // public i: any;

  constructor(
    public _getRegionsService: GetRegionsService
  ) {

  }

  ngOnInit(): void {
    this.getRegionValues();
  }

  drop(event:CdkDragDrop<HomeInterface>){
    if(!this.homeInterFace){
      return;
    }
     moveItemInArray((this.homeInterFace.regions), event.previousIndex, event.currentIndex);
  }

  getRegionValues(){
    /*if(!this.homeInterFace){
      return;
    }*/

    this._getRegionsService.getRegions().subscribe({
        next: (homeInterface: HomeInterface) => {
          this.homeInterFace = homeInterface;
          this.homeInterFace.regions = homeInterface.regions;
          // console.log(this.adminInterFace.regions);
        }
      }
    )
  }

}
