import { Component, signal } from '@angular/core';
// import { MathDemo } from "./components/math-demo/math-demo";
import { Counter } from './components/counter/counter';
import { TodoCrud } from './components/todo-crud/todo-crud';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeAdd } from './components/employee-add/employee-add';

@Component({
  selector: 'app-root',
  imports: [
    // MathDemo,
    // Counter
    // TodoCrud
    EmployeeList,
    EmployeeAdd
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project_2');
}
