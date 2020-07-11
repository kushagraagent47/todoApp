import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: any;
  dates: string[];
  curTodos: any;
  curValue: any;
  val: any;
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
    if (todo.date === val) {
      this.curTodos[this.curTodos.length] = todo;
    }
  }


  addDate(data) {
    this.dates.push(data);
  }

  changeStatus(todo) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i] === todo) {
        if (this.todos[i].isCompleted === 'true') {
          this.todos[i].isCompleted = 'false';
        } else {
          this.todos[i].isCompleted = 'true';
        }
      }
    }

    for (var i = 0; i < this.curTodos.length; i++) {
      if (this.curTodos[i] === todo) {
        if (this.curTodos[i].isCompleted === 'true') {
          this.curTodos[i].isCompleted = 'false';
        } else {
          this.curTodos[i].isCompleted = 'true';
        }
      }
    }

    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i] === todo) {
        this.todos.push(todo);
        this.todos.splice(i, 1);
        break;
      }
    }

    for (var i = 0; i < this.curTodos.length; i++) {
      if (this.curTodos[i] === todo) {
        this.curTodos.push(todo);
        this.curTodos.splice(i, 1);
        break;
      }
    }
  }

  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(indexofTodo, 1);
    this.curTodos.splice(indexofTodo, 1);
  }

  emptytodos = (val: any) => {
    this.val = val;
    var count = 0;
    for (var j = 0; j < this.todos.length; j++) {
      if (this.todos[j].date === this.val) {
        this.curTodos[j - count] = this.todos[j];
      }
      if (this.todos[j].date !== this.val) {
        count = count + 1;
      }
    }

    for (var i = 0; i < this.curTodos.length; i++) {
      if (this.curTodos[i].date !== val) {
        this.curTodos.splice(i, 1);
      }
    }
  };
}
