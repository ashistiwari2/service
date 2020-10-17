import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoitemService {
  tododetail:[{id:1,date:"12/12/2020",title:"title 1",description:"description 1"},
  {id:2,date:"13/12/2020",title:"title 2",description:"description 2"},
  {id:3,date:"14/12/2020",title:"title 3",description:"description 3"},
  {id:4,date:"15/12/2020",title:"title 3",description:"description 4"}]
  createTodo(id,date,title,description){
    this.tododetail.push({id,date,title,description})
  }
  removeTodo(){
    this.tododetail.pop();
  }

  constructor() { }
}
