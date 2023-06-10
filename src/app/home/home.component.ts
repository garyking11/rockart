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

  public homeInterface?: HomeInterface;
  // public homeInterfaceLocations?: HomeInterface | undefined;
  // public i: any;

  constructor(
    public _getRegionsService: GetRegionsService
  ) {

  }

  ngOnInit(): void {
    this.getRegionValues();
  }

  drop(event:CdkDragDrop<HomeInterface>){
    if(!this.homeInterface){
      return;
    }
     moveItemInArray((this.homeInterface.regions), event.previousIndex, event.currentIndex);
  }

  getRegionValues(){
    /*if(!this.homeInterFace){
      return;
    }*/

    this._getRegionsService.getRegions().subscribe({
        next: (homeInterface: HomeInterface) => {
          this.homeInterface = homeInterface;
          this.homeInterface.regions = homeInterface.regions;
          // console.log(this.adminInterFace.regions);
        }
      }
    )
  }

}
