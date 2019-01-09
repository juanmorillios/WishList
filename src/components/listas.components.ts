
import { Component, Input } from '@angular/core';
import { WishlistService } from '../app/services/wishlist.services';
import { Lista } from '../app/models/list.model';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/Agregar/agregar.components';


@Component ({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})

export class ListasComponent {

  @Input() terminada: boolean = false;

  constructor( public wishlistService: WishlistService,
                private navCtrl: NavController,
                private alertCtrl: AlertController) {
  }

  listaSeleccionada( lista: Lista ) {
    this.navCtrl.push( AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
  }

    borrarLista( lista: Lista ) {
    this.wishlistService.borrarLista ( lista );
  }

  editarLista( lista: Lista, slidingItem: ItemSliding) {

    slidingItem.close();


      const alerta = this.alertCtrl.create({
        title: 'Editar nombre',
        message: 'Editar nombre de la lista',
        inputs: [{
          name: 'titulo',
          placeholder: 'Nombre de la lista',
          value: lista.titulo
        }],
        buttons: [{
          text: 'Cancelar'
        },{
          text: 'Actualizar',
          handler: data => {
            if ( data.titulo.length === 0 ){
              return;
            }
           lista.titulo = data.titulo;
           this.wishlistService.guardarStorage();
          }
        }]
      });
      alerta.present();
      }

  }
