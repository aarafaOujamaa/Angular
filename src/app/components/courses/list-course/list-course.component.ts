import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Courses } from '../../../models/courses';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';


@Component({
  selector: 'app-list-course',
  imports: [EditIconComponent,  DeleteIconComponent],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css'
})
export class ListCourseComponent {

  @Input({alias:'my-courses', required: true}) coursesData: Courses[] = [];

  @Output() deleteEmiter = new EventEmitter();
  @Output() editeEmiter = new EventEmitter();
  @Input() ediatble: boolean = false;

  deleteCourse(id: number) {
    this.deleteEmiter.emit(id);
  }

  editCourse(course: Courses) {
   this.editeEmiter.emit(course);
   this.ediatble=true;
  }

}
