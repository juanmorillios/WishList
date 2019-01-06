import { Component } from '@angular/core';
import { WishlistService } from '../../app/services/wishlist.services';
import { List } from '../../app/models/list.model';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../Agregar/agregar.components';

@Component({
    selector: 'page-pendientes',
    templateUrl:'pendientes.component.html'
})
export class PendientesPage{

  constructor( public wishlistService: WishlistService,
               private navCtrl: NavController) {

  }

  listSelected ( list: List ) {
    console.log(list);
  }

  agregarLista() {

    this.navCtrl.push( AgregarPage );
   }

}
