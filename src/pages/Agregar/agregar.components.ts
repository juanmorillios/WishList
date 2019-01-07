import { Component } from '@angular/core';
import { WishlistService } from '../../app/services/wishlist.services';
import { List } from '../../app/models/list.model';
import { NavParams } from 'ionic-angular';
import { ListItem } from '../../app/models/list-item.model';

@Component({
    selector: 'page-agregar',
    templateUrl:'agregar.component.html'
})
export class AgregarPage{

  lista: List;
  nombreItem: string = '';

  constructor( public wishlistService: WishlistService, 
               private navParams: NavParams){
                   
      const titulo = this.navParams.get('titulo');
      this.lista = new List( titulo );
  }
   agregarItem() {
       if ( this.nombreItem.length === 0 ) {
           return;
       }
    const nuevoItem = new ListItem(this.nombreItem);
    this.lista.items.push( nuevoItem );
    this.nombreItem = '';
   }

   actualizarTarea(item: ListItem) {
    item.completado = !item.completado;
   }
}
