import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  message: string;

  faTrashAlt = faTrashAlt;
  todos: Todo[];
  constructor(private todoService: TodoService, private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todo: Todo) {
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
