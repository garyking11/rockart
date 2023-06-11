import {AfterContentChecked, ChangeDetectorRef, Component, OnInit, Renderer2} from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from "@angular/cdk/drag-drop";
import {HomeInterface} from "./home.interface";
import {LocationsInterface} from '../admin/locations.interface';
import {GetRegionsService} from "../services/get-regions.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentChecked {

  public homeInterface?: HomeInterface | undefined;
  // public locationsInterface?: LocationsInterface | undefined;

  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor(
    public _getRegionsService: GetRegionsService,
    private router: Router,
    private renderer: Renderer2,

  ) {

  }

  ngOnInit(): void {
    this.getRegionValues();
    // this.getGoogleMap("https://goo.gl/maps/tW5JBiUbUcoBDSeq5");
  }

  ngAfterContentChecked() {
    //
  }

  drop(event: CdkDragDrop<HomeInterface>) {
    if (!this.homeInterface) {
      return;
    }
    moveItemInArray((this.homeInterface.regions), event.previousIndex, event.currentIndex);
  }

  getRegionValues() {
    if (this.homeInterface) {
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

  getGoogleMap(externalLink: string) {
      console.log(externalLink);

    this.renderer.setProperty(window, 'location', window.open(externalLink))
    location.reload()
  }
//"https://goo.gl/maps/tW5JBiUbUcoBDSeq5"

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
