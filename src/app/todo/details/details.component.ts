import { Component, OnInit } from '@angular/core';
import {TodoitemService} from '../../todoitem.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  tododetail;

  constructor(private detail:TodoitemService) { }


  ngOnInit(): void {
    this.tododetail=this.detail.tododetail;
  }

}
