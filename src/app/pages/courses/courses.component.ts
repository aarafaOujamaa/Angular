import { Component } from '@angular/core';
import { CardCourseComponent } from "../../components/courses/card-course/card-course.component";
import { ListCourseComponent } from "../../components/courses/list-course/list-course.component";
import { GridCourseComponent } from '../../components/courses/grid-course/grid-course.component';
import { FormCourseComponent } from '../../components/courses/form-course/form-course.component';
import { Courses } from '../../models/courses';
import { AddIconComponent } from '../../components/icons/add-icon/add-icon.component';
import {random} from "lodash"

@Component({
  selector: 'app-courses',
  imports: [FormCourseComponent, ListCourseComponent, GridCourseComponent, AddIconComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  list: boolean = true;

  showForm : boolean = false;


  courses: Courses[] = [{
    id:1,
    title: "Montre connectée Premium",
    url: "images/cloud.jpg",
    price: 249.873156,
    content: "Montre intelligente avec suivi d'activité avancé et notifications en temps réel",
    createdAt: "2024-01-15T08:30:00Z",
    publishedAt: "2024-01-16T10:00:00Z",
    active: true
  },
  {
    id:2,
    title: "Casque audio sans fil",
    url: "images/docker.jpg",
    price: 189.452367,
    content: "Casque bluetooth avec réduction de bruit active et son haute fidélité",
    createdAt: "2024-01-14T15:45:00Z",
    publishedAt: "2024-01-15T09:00:00Z",
    active: true
  },
  {
    id:3,
    title: "Tablette graphique pro",
    url: "images/kubectl.jpg",
    price: 599.146823,
    content: "Tablette graphique haute précision pour les artistes numériques",
    createdAt: "2024-01-13T11:20:00Z",
    publishedAt: "2024-01-14T14:30:00Z",
    active: false
  },
  {
    id:4,
    title: "Enceinte portable",
    url: "images/docker.jpg",
    price: 129.567834,
    content: "Enceinte waterproof avec 20h d'autonomie et son immersif",
    createdAt: "2024-01-12T09:15:00Z",
    publishedAt: "2024-01-13T08:00:00Z",
    active: true
  },
  {
    id:5,
    title: "Clavier mécanique RGB",
    url: "images/kubectl.jpg",
    price: 159.234978,
    content: "Clavier gaming avec switches mécaniques et rétroéclairage personnalisable",
    createdAt: "2024-01-11T14:25:00Z",
    publishedAt: "2024-01-12T16:00:00Z",
    active: true
  },
  {
    id:6,
    title: "Webcam 4K",
    url: "images/cloud.jpg",
    price: 179.891234,
    content: "Webcam ultra HD avec microphone intégré et correction automatique de la lumière",
    createdAt: "2024-01-10T16:40:00Z",
    publishedAt: "2024-01-11T10:30:00Z",
    active: false
  },
  {
    id:7,
    title: "Souris ergonomique",
    url: "images/docker.jpg",
    price: 89.456789,
    content: "Souris verticale conçue pour réduire la fatigue du poignet",
    createdAt: "2024-01-09T13:50:00Z",
    publishedAt: "2024-01-10T09:15:00Z",
    active: true
  },
  {
    id:8,
    title: "Station de charge sans fil",
    url: "images/cloud.jpg",
    price: 69.123456,
    content: "Chargeur 3-en-1 pour smartphone, montre et écouteurs",
    createdAt: "2024-01-08T10:20:00Z",
    publishedAt: "2024-01-09T11:45:00Z",
    active: true
  },
  {
    id:9,
    title: "Hub USB-C multiport",
    url: "images/kubectl.jpg",
    price: 79.345612,
    content: "Hub 7-en-1 avec HDMI, USB 3.0 et lecteur de carte",
    createdAt: "2024-01-07T12:35:00Z",
    publishedAt: "2024-01-08T15:20:00Z",
    active: true
  },
  {
    id:10,
    title: "Support pour ordinateur portable",
    url: "images/img1.jpg",
    price: 45.678912,
    content: "Support ajustable en aluminium avec refroidissement passif",
    createdAt: "2024-01-06T09:45:00Z",
    publishedAt: "2024-01-07T13:00:00Z",
    active: true
  }];

   courseTempo!: Courses;

  saveCours(course: Courses) {
     let mycourse : Courses = {
      ...course,
      id:random(100 , 200)
     }
    this.courses.push(mycourse);
    this.toggleForm();
  }

  updateCours(course: Courses) {
     this.courses = this.courses.map(item => item.id === course.id ? course : item);
     this.toggleForm();
 }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  changeView(etat: boolean){
    this.list = etat;
  }

  deleteCoureById(id: number) {
    this.courses =  this.courses.filter( (course) => course.id !== id);
  }

  editCoureById(course: Courses) {
    this.courseTempo = course;
    this.toggleForm();
  }
  
  

}
