export interface AdminInterface {
  image: any;
  title: string;
  regions: Regions[];
  locations: Locations[];
  i: number;

}

export interface Regions {
  regionLink: string;
  image: string;
  region: string;

}

export interface Locations {
  name: string;
  link: string;
  map: string;
  gpsCoordinates: string;
  comments: string;
  directions: string;
}
