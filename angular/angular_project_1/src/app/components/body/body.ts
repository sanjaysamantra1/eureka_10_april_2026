import { PipesDemo } from './../pipes-demo/pipes-demo';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { DirectiveAssignment } from '../directive-assignment/directive-assignment';
import { Products } from '../products/products';
import { MyModal } from '../my-modal/my-modal';
import { Users } from '../users/users';
import { ProductList } from '../product-list/product-list';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { ProductListHttp } from '../product-list-http/product-list-http';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives,
    // DirectiveAssignment
    // Products
    // MyModal
    // Users
    // ProductList
    // PipesDemo
    // ParentDemo
    // Demo1,
    // Demo2
    // HttpDemo1
    // ProductListHttp
    // CommentList
    // EmployeeList
    ObservableDemo1
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
