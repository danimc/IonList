import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { TodoModel } from '../../shared/todo-model';

/**
 * Generated class for the AddTaskModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task-modal',
  templateUrl: 'add-task-modal.html',
})
export class AddTaskModalPage {

  public model = new TodoModel('');
  public title = "Nueva Tarea";
  public buttonText = "Agregar";

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    if(this.navParams.get('todo')) {
      this.model = TodoModel.clone(this.navParams.get('todo'));
      this.title = "Editar Tarea";
      this.buttonText = "Guardar Cambios"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskModalPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  submit(){
    this.viewCtrl.dismiss(this.model)
  }

}
