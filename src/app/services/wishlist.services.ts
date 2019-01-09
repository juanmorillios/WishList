import { Injectable } from '@angular/core';
import { Lista } from '../models/list.model';



@Injectable()
export class WishlistService {

  listasApp: Lista[] = [];

  constructor() {

    this.cargarStorage();

  }

  agregarLista( lista: Lista ) {
    this.listasApp.push( lista );
    this.guardarStorage();
  }

  borrarLista( lista: Lista) {
    this.listasApp = this.listasApp.filter( listaData => {
      return listaData.id !== lista.id
    });
    this.guardarStorage();


  }


  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listasApp));
  }

  cargarStorage() {
    if( localStorage.getItem('data') ) {
      this.listasApp = JSON.parse(localStorage.getItem('data'));
  } else {
      this.listasApp = [];
  }
  }
}
