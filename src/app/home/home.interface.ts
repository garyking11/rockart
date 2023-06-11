export interface HomeInterface {
  title: string;
  regions: Regions[];
  locations: Location[];
}

export interface Regions {

  image: string;
  region: string;
  locations: Location[];
}

export interface Location {
  region: string;
  name: string;
  description: string;
  link: string;
  map: string;
  gpsCoordinates: string;
  latitude: string;
  longitude: string;
  comments: string;
  directions: string;
  image: string;
}
