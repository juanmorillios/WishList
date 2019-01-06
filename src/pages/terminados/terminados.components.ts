
import { Component } from '@angular/core';
import { WishlistService } from '../../app/services/wishlist.services';

@Component ({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html'
})

export class TerminadosPage {

  constructor( public wishlistService: WishlistService ) {

  }

}
