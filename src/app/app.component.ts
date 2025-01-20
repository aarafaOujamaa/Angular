import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CoursesComponent } from './pages/courses/courses.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular18-project';
}
