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
    Demo1,
    Demo2
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
