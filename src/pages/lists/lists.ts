import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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

  public selectedList : ListModel = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public listsService: ListServiceProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  gotoList(list: ListModel) {
    this.clearSelectedLIst();
    this.navCtrl.push(TodosPage, {list});
  }

  addNewLists(name:string) {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.listsService.addList(name)
    .subscribe(list => {
      this.gotoList(list);
      loader.dismiss();
    }, error => {loader.dismiss();});
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
          handler: data => {
            let navTransition = addListAlert.dismiss();
            navTransition.then(()=> {this.addNewLists(data.nombre)}); 
            return false;
            }
        }
      ]
    });

    addListAlert.present();
  }

  clearSelectedLIst() {
    this.selectedList = null;
  }

  selectList(list: ListModel) {
    if(this.selectedList == list) {
      this.clearSelectedLIst();
    }
    else {
      this.selectedList = list;
    }
  }

  removeSelectedList() {
    this.listsService.removeList(this.selectedList);
    this.selectedList = null;
  }

}
