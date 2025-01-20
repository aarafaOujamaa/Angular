import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../../../models/courses';
import { EditIconComponent } from "../../icons/edit-icon/edit-icon.component";
import { DeleteIconComponent } from "../../icons/delete-icon/delete-icon.component";
import { CardCourseComponent } from "../card-course/card-course.component";

@Component({
  selector: 'app-grid-course',
  imports: [CardCourseComponent],
  templateUrl: './grid-course.component.html',
  styleUrl: './grid-course.component.css'
})
export class GridCourseComponent {

 @Input({alias:'my-courses', required: true}) coursesData: Courses[] = [];

 @Output() deleteEmiter = new EventEmitter();

 deleteById(id: number) {
    // send object elements, id,createby,active.... or only emit({id})
    this.deleteEmiter.emit({id:id});
  }
}
