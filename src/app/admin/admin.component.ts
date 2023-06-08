import {Component, OnInit} from '@angular/core';
import {AdminInterface} from "./admin.interface";
import {GetRegionsService} from "../services/get-regions.service";
import {LocationsInterface} from "./locations.interface";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public adminInterface?: AdminInterface | undefined;
  public locationsInterface?: LocationsInterface | undefined;

  constructor(
    public _getRegionsService: GetRegionsService
  ) {
  }

  ngOnInit(): void {
    this.getRegionValues();
    // this.getLocationsValues();
  }

  /**
   * Needs json server
   */
  getRegionValues() {
    /*if(!this.adminInterFace){
      return;
    }*/

    this._getRegionsService.getRegions().subscribe({
        next: (adminInterface: AdminInterface) => {
          this.adminInterface = adminInterface;
          this.adminInterface.regions = adminInterface.regions;
          console.log(this.adminInterface.regions);
        }
      }
    )
  }

  getLocationsValues() {
    /*if(!this.locationsInterface){
      return;
    }*/
    this._getRegionsService.getLocations().subscribe({
      next: (locationInterface: LocationsInterface | undefined) => {
        this.locationsInterface = locationInterface;

        // console.log(this.homeInterFace.regions);
      }
    });
  }

  saveRegion(adminInterface: AdminInterface) {
    // let siteContext = this.siteContext.account
    /*let regions = {
      regionLink: adminInterface?.regions,
      location: adminInterface.regions,
      image: adminInterface.regions
    }
    this._getRegionsService.sendRegion(regions).subscribe();
    console.log(regions);*/
    // this._locationService.sendLocations(locations).subscribe();

    // this._snackBarService.openSnackBar('Your location data has been saved!', '');
  }

  // Add Region
  addRegion() {
    this.adminInterface?.regions.push({
      region: "test",
      regionLink: "test",
      image: ""
    })

    console.log('add region fired')
  }

  removeRegion(index: number) {
    this.adminInterface?.regions.splice(index, 1);
  }

  // Add location
  odd: any;
  even: any;

  addLocation() {

  }


}
