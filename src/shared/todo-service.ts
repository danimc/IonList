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
  }

  public loadFromList(id: number) {
    if(id < 3 ) {
      this.todos =  [
        new TodoModel("primer elemento"),
        new TodoModel("2 elemento"),
        new TodoModel("3 elemento", true),
        new TodoModel("4 elemento", false, true),
  
      ];
    }
    else {
      this.todos = [];
    }
   
  }


  toogleTodo(todo: TodoModel){
    
      let isDone = !todo.isDone;
      const todoIndex = this.todos.indexOf(todo);
      let updateTodo = new TodoModel(todo.description, todo.isImportant, isDone);

      this.todos = [
        ...this.todos.slice(0, todoIndex),
        updateTodo,
        ...this.todos.slice(todoIndex+1)
      ];
    
    }

  addTodo(todo: TodoModel) {
    this.todos = [
      ...this.todos,
      todo
      ];
  }

  removeTodo(todo: TodoModel) {
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index+1)
    ];
  }

  updateTodo(originalTodo: TodoModel, modifiedTodo: TodoModel) {
    const index = this.todos.indexOf(originalTodo);
    this.todos = [
      ...this.todos.slice(0, index),
      modifiedTodo,
      ...this.todos.slice(index+1)
    ];
  }

}
