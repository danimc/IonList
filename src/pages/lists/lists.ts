import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TodosPage } from '../todos/todos';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  gotoList() {
    this.navCtrl.push(TodosPage);
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
          handler: data => { this.gotoList();}
        }
      ]
    });

    addListAlert.present();
  }

}
