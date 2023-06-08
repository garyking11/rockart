export interface HomeInterface {
  title: string;
  regions: Regions[];

}

export interface Regions {
  regionLink: string;
  image: string;
  region: string;
  locations: Locations[];
}

export interface Locations {
  name: string;
  link: string;
  map: string;
  gpsCoordinates: string;
  comments: string;
  directions: string;
}
