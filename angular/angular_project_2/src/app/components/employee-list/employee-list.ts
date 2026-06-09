import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchEmployees, deleteEmployee } from '../../actions/employee.actions';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees$: Observable<Employee[]> | undefined;

  constructor(private store: Store<{ employeeData: Employee[] }>) {
    this.employees$ = this.store.select((state) => state.employeeData);
  }
  ngOnInit() {
    // this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    this.store.dispatch(fetchEmployees());
  }

  deleteEmp(id: any) {
    const flag = confirm('Are you sure, You want to delete this record?');
    if (flag) {
      this.store.dispatch(deleteEmployee({ id }));
    }
  }
}
