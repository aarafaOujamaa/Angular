import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../../../models/courses';
import { EditIconComponent } from "../../icons/edit-icon/edit-icon.component";
import { DeleteIconComponent } from "../../icons/delete-icon/delete-icon.component";
import { CoursesComponent } from '../../../pages/courses/courses.component';

@Component({
  selector: 'app-card-course',
  imports: [EditIconComponent, DeleteIconComponent],
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css'
})
export class CardCourseComponent {

  @Input() course!: Courses;
  @Output() delete= new EventEmitter();

  deleteCourse(id : number) {
    this.delete.emit({id});
  }

}
