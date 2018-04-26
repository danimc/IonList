import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TodoModel } from './todo-model';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {

  private todos : TodoModel[];

  constructor(public http: HttpClient) {
    this.getTodos();
  }

  getTodos() {
    this.todos =  [
      new TodoModel("primer elemento"),
      new TodoModel("2 elemento"),
      new TodoModel("3 elemento", true),
      new TodoModel("4 elemento", false, true),

    ];
  }


  toogleTodo(todo: TodoModel){
    todo.isDone = ! todo.isDone;
  }

  addTodo(todo: TodoModel) {
    this.todos.push(todo);
  }

}
