import { Component, OnInit } from '@angular/core';
import {TodoitemService} from '../../todoitem.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id;
  date:string;
  title:string;
  description:string;

  constructor(private create:TodoitemService) { }

  ngOnInit(): void {
   
  }
  addtodo(){
    this.create.createTodo(this.id,this.date,this.title,this.description);
  }
  removetodo(){
    this.create.removeTodo();
  }
}
