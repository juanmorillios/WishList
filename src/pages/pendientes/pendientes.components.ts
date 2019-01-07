import { Component } from '@angular/core';
import { WishlistService } from '../../app/services/wishlist.services';
import { List } from '../../app/models/list.model';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgregarPage } from '../Agregar/agregar.components';

@Component({
    selector: 'page-pendientes',
    templateUrl:'pendientes.component.html'
})
export class PendientesPage{

  constructor( public wishlistService: WishlistService,
               private navCtrl: NavController,
               private alertCtrl: AlertController) {
  }

  listSelected ( list: List ) {
    console.log(list);
  }

  agregarLista() {
   const alerta = this.alertCtrl.create({
     title: 'Nueva lista',
     message: 'Nombre de la nueva lista que desea',
     inputs: [{
       name: 'titulo',
       placeholder: 'Nombre de la lista'
     }],
     buttons: [{
       text: 'Cancelar'
     },{
       text: 'Agregar',
       handler: data => {
         if ( data.titulo.length === 0 ){
           return;
         }
         this.navCtrl.push( AgregarPage,{
            titulo: data.titulo
         });
       }
     }]
   });
   alerta.present();
   }

}
