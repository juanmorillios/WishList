import { Injectable } from '@angular/core';
import { Lista } from './../models/list.model';


@Injectable()
export class WishlistService {

  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();

    // const list1 = new List('Tomorrow go to the cinema to see the movie of spiderman');
    // const list2 = new List('GToday, the day of kings, ask for pizza');
    // this.lists.push(list1, list2);
    // console.log(this.lists);

  }

  agregarLista( lista: Lista ) {
    this.listas.push( lista );
    //this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if( localStorage.getItem('data') ) {
      this.listas = JSON.parse(localStorage.getItem('data'));
  } else {
      this.listas = [];
  }
  }
}
