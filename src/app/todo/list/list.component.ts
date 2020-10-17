import { Component, OnInit } from '@angular/core';
import {TodoitemService} from '../../todoitem.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todolist;

  constructor(private todolist1:TodoitemService) { }

  ngOnInit(): void {
    this.todolist=this.todolist1.tododetail;
  }

}
