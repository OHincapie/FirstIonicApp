import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places = [
    {
      id: 1,
      imageURL: 'https://www.renfe-sncf.com/es-es/blog/PublishingImages/curiosidades-paris-torre-eiffel/curiosidades_paris_torre_eiffel.jpg',
      name: 'Eiffel Tower'
    },
    {
      id: 2,
      imageURL: 'https://www.fcbarcelona.com/fcbarcelona/photo/2020/02/24/3f1215ed-07e8-47ef-b2c7-8a519f65b9cd/mini_UP3_20200105_FCB_VIS_View_1a_Empty.jpg',
      name: 'Camp Nou'
    }
  ]

  constructor() { }

  getAll(){
    return [...this.places];
  }

  getById(placeId){
    return {
      ...this.places.find(place => place.id === placeId)
    }
  }

  delete(){

  }

  create(){

  }

}
