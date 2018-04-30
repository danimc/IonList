import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListModel } from './list-model';

/*
  Generated class for the ListServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListServiceProvider {

  public lists: ListModel[] = [];

  constructor(public http: HttpClient) {
    this.getLists();
  }

  private getLists() {
    this.lists = [
      new ListModel("mi lista #1", 0),
      new ListModel("mi lista #2", 1),
      new ListModel("mi lista #3", 2),
      new ListModel("mi lista #4", 3),
      new ListModel("mi lista #5", 4),
      new ListModel("mi lista #6", 5),
      new ListModel("mi lista #7", 6),
      new ListModel("mi lista #8", 7),
    ];
  }

  public addList(name: string) {
    let list = new ListModel(name, this.lists.length);
    this.lists = [...this.lists, list];
  }

}
