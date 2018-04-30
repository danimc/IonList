import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ListModel } from './list-model';

/*
  Generated class for the ListServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListServiceProvider {

  public lists: ListModel[] = [];

  constructor(public http: HttpClient, public local: Storage) {
    this.getLists();
  }

  private getLists() {
    this.getFromLocal();
  }

  public addList(name: string) {
    let list = new ListModel(name, this.lists.length);
    this.lists = [...this.lists, list];
    return list;
  }

  public getFromLocal() {
    this.local.ready().then(()=> {
      this.local.get('lists').then(
        data => {
          let localList: ListModel[] =[];
          if(data) {
            for(let list of data){
              localList.push(new ListModel(list.name, list.id))
            }
          }
          this.lists = localList;
        })
    })
  }

  public saveLocally() {
    this.local.ready().then(()=> {
      this.local.set('lists', this.lists)
    })
  }

}
