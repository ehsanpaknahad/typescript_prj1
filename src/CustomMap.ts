import {User } from './User'
import { Company } from './Company';

export interface Mappable {
  location : {
    lat:number ;
    lng:number 
  };
  markerContent(): string;
  color:string
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId:string){
    this.googleMap = new google.maps.Map(document.getElementById(divId),{
      zoom:1,
      center:{
        lat:0, // user.location.lat,
        lng:0 //user.location.lng
      }
    });
  }

  addMarker(mappable: Mappable):void{
    const marker = new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:mappable.location.lat,
        lng:mappable.location.lng
      }
    })
    
    const infowindow = new google.maps.InfoWindow(
      {
        content: mappable.markerContent(),
        zIndex: 1
      }
    )

    marker.addListener( 'click' , function(){
      infowindow.open(this.googleMap , marker)
    })


    
  }

   
}