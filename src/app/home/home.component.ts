import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from "@angular/cdk/drag-drop";
import {HomeInterface} from "./home.interface";
import {LocationsInterface} from '../admin/locations.interface';
import {GetRegionsService} from "../services/get-regions.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeInterface?: HomeInterface | undefined;
  // public locationsInterface?: LocationsInterface | undefined;

  // public i: any;

  constructor(
    public _getRegionsService: GetRegionsService
  ) {

  }

  ngOnInit(): void {
    this.getRegionValues();
    this.getLocationValues();
  }

  drop(event: CdkDragDrop<HomeInterface>) {
    if (!this.homeInterface) {
      return;
    }
    moveItemInArray((this.homeInterface.regions), event.previousIndex, event.currentIndex);
  }

  getRegionValues() {
   if(this.homeInterface){
      return;
    }

    this._getRegionsService.getRegions().subscribe({
        next: (homeInterface: HomeInterface) => {
          this.homeInterface = homeInterface;
          this.homeInterface.regions = homeInterface.regions;
          this.homeInterface.locations = homeInterface.locations;
          console.log(this.homeInterface?.regions);
        }
      }
    )
  }

  getLocationValues() {
/*    this._getRegionsService.getLocations().subscribe({
        next: (homeInterface: LocationsInterface) => {
          this.homeInterface?.regions = homeInterface;
          this.homeInterface.locations = homeInterface?.locations;
            console.log(this.homeInterface?.locations);

        }
      }
    )*/
  }
}
