import { Component } from '@angular/core';
import { WishlistService } from '../../app/services/wishlist.services';
import { Lista } from '../../app/models/list.model';
import { NavParams } from 'ionic-angular';
import { ListItem } from '../../app/models/list-item.model';

@Component({
    selector: 'page-agregar',
    templateUrl:'agregar.component.html'
})
export class AgregarPage{

  lista: Lista;
  nombreItem: string = '';

  constructor( public wishlistService: WishlistService,
               private navParams: NavParams){

      const titulo = this.navParams.get('titulo');

      if ( this.navParams.get( 'lista' ) ) {
        this.lista = this.navParams.get( 'lista' );
      } else {
        this.lista = new Lista( titulo );
        this.wishlistService.agregarLista( this.lista );
      }

  }
   agregarItem() {
       if ( this.nombreItem.length === 0 ) {
           return;
       }
    const nuevoItem = new ListItem(this.nombreItem);
    this.lista.items.push( nuevoItem );
    this.wishlistService.guardarStorage();
    this.nombreItem = '';

   }

   actualizarTarea(item: ListItem) {
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter( itemData =>{
      return !itemData.completado;
    }).length;

    if ( pendientes === 0 ) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }
    this.wishlistService.guardarStorage();
   }

   borrar( idx: number ) {
     this.lista.items.splice( idx, 1 );
     this.wishlistService.guardarStorage();
   }
}
