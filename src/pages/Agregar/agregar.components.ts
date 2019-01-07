import { Component } from '@angular/core';
import { WishlistService } from '../../app/services/wishlist.services';
import { List } from '../../app/models/list.model';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl:'agregar.component.html'
})
export class AgregarPage{

  lista: List;

  constructor( public wishlistService: WishlistService, 
               private navParams: NavParams){
      const titulo = this.navParams.get('titulo');
      this.lista = new List( titulo );

  }

}
