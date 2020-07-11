import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './../../model/Todo'

import { v4 as uuid } from 'uuid'
import { TodoService } from './../../service/todo.service'
import { DataService } from '../../data.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle: string

  message: string

  currentDate: string

  constructor(private todoService: TodoService, private data: DataService) { }



  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.currentDate = message)
  }

  getDate = ""

  handleAdd() {
    const newTodo:Todo = {
      id: uuid(),
      title: this.todoTitle,
      isCompleted: false,
      date: this.currentDate,
    }

    this.todoService.addTodo(newTodo, this.currentDate);
    this.todoService.emptytodos(this.currentDate)
    this.todoTitle = ""
  }

  

}
