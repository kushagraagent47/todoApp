import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dates: string[]

  
  getDate: string;

  message: string;


  @Output() messageEvent = new EventEmitter<string>();

  constructor(private todoService: TodoService, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.todoService.getDates().subscribe(dates => {
      this.dates = dates
    })
  }

  currentDate(val) {
    this.getDate = val;
    this.sendData(val);
    this.newMessage(val);
    this.emptyTodo(val);
  }

  handleAddDate() {
    var len = this.dates.length + 1;
    this.todoService.addDate(len);
  }

  sendData(val) {
    this.messageEvent.emit(val)
  }

  newMessage(val) {
    this.data.changeMessage(val)
  }

  emptyTodo(val){
    this.todoService.emptytodos(val)
  } 

}
