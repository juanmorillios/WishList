import { Component } from '@angular/core';
import { WishlistService } from '../../app/services/wishlist.services';

@Component({
    selector: 'page-pendientes',
    templateUrl:'pendientes.component.html'
})
export class PendientesPage{

  constructor( public wishlistService: WishlistService ) {

  }

}
