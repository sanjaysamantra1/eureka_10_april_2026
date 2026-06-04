import { Component, signal } from '@angular/core';
import { MathDemo } from "./components/math-demo/math-demo";

@Component({
  selector: 'app-root',
  imports: [MathDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project_2');
}
