import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../../../models/courses';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-course',
  imports: [FormsModule],
  templateUrl: './form-course.component.html',
  styleUrl: './form-course.component.css'
})
export class FormCourseComponent {

  @Output() save= new EventEmitter(); 
  @Output() update = new EventEmitter();

  @Input() course: Courses = {
    title: '',
    url: '',
    price: 0,
    content: '',
    active: false,
  };

 saveCourse() {
   this.save.emit(this.course);
    this.course = {
      title: '',
      url: '',
      price: 0,
      content: '',
      active: false,
    };
  }

  updateCourse() {
    this.update.emit(this.course);
    this.course = {
      title: '',
      url: '',
      price: 0,
      content: '',
      active: false,
    };
  }

}
