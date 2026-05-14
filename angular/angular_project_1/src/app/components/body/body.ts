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
    ParentDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
