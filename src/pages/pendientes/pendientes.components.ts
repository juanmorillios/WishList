import { Component } from '@angular/core';
import { WishlistService } from '../../app/services/wishlist.services';
import { List } from '../../app/models/list.model';

@Component({
    selector: 'page-pendientes',
    templateUrl:'pendientes.component.html'
})
export class PendientesPage{

  constructor( public wishlistService: WishlistService ) {

  }

  listSelected ( list: List ) {
    console.log(list);
  }

}
