import { Component, computed, EventEmitter, input, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
@Input({required:true})id!:string;
@Input({required:true}) avatar!:string;
@Input({required:true}) name!:string;
@Output()select=new EventEmitter();

// avatar=input.required<string>();
// name=input.required<string>();
// pathImage=computed(()=>{
//   return   "assets/users/"+this.avatar();
// })
get pathImage(){
  return "assets/users/"+this.avatar;
}
get selectedUser(){
  return this.name;
}
onSelectUser(){
  this.select.emit(this.id);
  
}
}
