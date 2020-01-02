
export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    const latlng = new google.maps.LatLng(0, 0);
    const mapE = document.getElementById(divID);
    this.googleMap = new google.maps.Map(mapE, {
      zoom: 1,
      center: latlng
    });
  }

  addMarker(mappable: Mappable):void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener('click', ()=>{
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })

  }
}
