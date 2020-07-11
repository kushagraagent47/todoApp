import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: any;
  dates: string[];
  curTodos: any;
  curValue: any;
  constructor() {
    this.todos = [];
    this.dates = [];
    this.curTodos = [];
  }

  getDates() {
    return of(this.dates);
  }

  getTodos() {
    return of(this.curTodos);
  }

  addTodo(todo: Todo, val) {
    this.todos.push(todo);
    console.log(this.todos)
    if(todo.date === val) {
      this.curTodos[this.curTodos.length] = todo;
    }
  }

  addDate(data) {
    this.dates.push(data);
  }

  changeStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });

    this.curTodos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(indexofTodo, 1);
      this.curTodos.splice(indexofTodo, 1)
  }

  emptytodos = (val) => {
    for (var i = 0; i < this.curTodos.length; i++) {
      if(this.curTodos[i].date != val ) {
        this.curTodos.splice(i, 1)
      }
    }
    this.curTodos.filter(item => !!item);
    }

  
}
