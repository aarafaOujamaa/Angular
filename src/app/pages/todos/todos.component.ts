import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'
import { Notification } from '../../models/notification';
import { AddIconComponent } from "../../components/icons/add-icon/add-icon.component";
import { DeleteIconComponent } from '../../components/icons/delete-icon/delete-icon.component';

@Component({
  selector: 'app-todos',
  imports: [FormsModule, NgClass, NgStyle, AddIconComponent, DeleteIconComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  
  notify: boolean = false;
  title ="Master Your Day!";
  
  edit = false;
  
  placeHolder= "defaultTodo";

  notification:  Notification= {
    message : '',
    alertClass :'',
    position : '',
    duration : 2000,
  }

  mytodo: string = '';
  showform: boolean = false;
  editable: boolean = false;
  todoindex: number = -1;
  labelButton: string = 'Create';

  todos: string[] = ['Angular18' ,'Angular16','ReactJs','Java','NodeJs'];

  submit() {

    if(!this.validateTodo()) {
      return;
   }

   if(this.editable) {
    this.labelButton = 'Update';
    this.updateTodo();
   } else {
    this.labelButton = 'Create';
    this.addTodos();
   }
  }

  validateTodo() {
    if(!this.mytodo) {
      this.triggerNotify({
        message :'Please check the data into a input is required',
        alertClass : 'alert-error',
        position:'toast-end',
        duration: 3000
      });
      return false;
    }
    return true;
  }


  addTodos() {
    //this.todos.push(this.mytodo);
    this.todos = [this.mytodo, ...this.todos]
    this.initTodo();
    this.triggerNotify({
      message :'todo created successfully',
      alertClass : 'alert-success', // only dynamic variables
      position : 'toast-end',
      duration: 30000,
    });
  }

  editTodo(todo: string, index: number) {
   this.mytodo = todo;
   this.editable= true;
   this.showform = true;
   this.todoindex = index;
  }

  updateTodo() {
   
   if(this.todoindex > -1) {
    this.todos[this.todoindex] = this.mytodo;
    this.initTodo();
    this.triggerNotify({
      message: 'Todo update Successfully',
      alertClass: 'alert alert-warning', // only dynamic variables
      position : 'toast toast-start', // here too
      duration: 3000
    });
   }
  }

  deleteTodo(index : number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
      
        this.todos = this.todos.filter((todo, i) =>  i!==index);
        this.triggerNotify({
          message: 'Todo deleted Successfully',
          alertClass: 'alert-error',
          position : 'toast-start',
          duration: 3000,
        });
        Swal.fire({
          title: "item is Deleted! ",
          text: "Your file has been deleted.",
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  } 

  initTodo() {
    this.editable = false;
    this.showform = false;
    this.mytodo ='';
    this.todoindex = -1;
  }

  triggerNotify(customNotify: Notification){

    this.notification = {
      ...customNotify,
    }

    this.notify = true;
    setTimeout(() => {
      this.notify = false;
    }, this.notification.duration);
  }


  toggleForm() {
    this.showform =!this.showform;
  }

  changeToggleBtn() {
    return this.showform ? "Hide" : "Show";
  }

  showTitle() {
    return this.edit == true ? "Edit my todo" : "show todo list";
  }

}
