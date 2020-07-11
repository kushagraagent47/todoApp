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

  dateToAdd: any;

  getDate: string;


  @Output() messageEvent = new EventEmitter<string>();

  constructor(private todoService: TodoService, private data: DataService) { }

  ngOnInit(): void {
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
    this.dateToAdd = this.dateToAdd.replace(/-0+/g, '-'); 
    this.todoService.addDate(this.dateToAdd);
    this.dateToAdd = "";
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
