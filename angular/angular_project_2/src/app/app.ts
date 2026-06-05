import { Component, signal } from '@angular/core';
// import { MathDemo } from "./components/math-demo/math-demo";
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [
    // MathDemo,
    Counter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project_2');
}
