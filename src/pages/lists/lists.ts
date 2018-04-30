import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TodosPage } from '../todos/todos';

import { ListServiceProvider } from '../../shared/list-service';
import { ListModel } from '../../shared/list-model';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public listsService: ListServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  gotoList(list: ListModel) {
    this.navCtrl.push(TodosPage, {list});
  }

  addNewLists(name:string) {
    let list =  this.listsService.addList(name);
    this.listsService.saveLocally();
    this.gotoList(list);
  }

  showAddList() {
    let addListAlert = this.alertCtrl.create({
      title: "Nueva Lista",
      message: "Nombre de la nueva lista",
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          handler: data => {}
        },
        {
          text: 'Agregar',
          handler: data => { this.addNewLists(data.nombre);}
        }
      ]
    });

    addListAlert.present();
  }

}
