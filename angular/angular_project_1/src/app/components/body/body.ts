import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { DirectiveAssignment } from '../directive-assignment/directive-assignment';
import { Products } from '../products/products';
import { MyModal } from '../my-modal/my-modal';
import { Users } from '../users/users';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives,
    // DirectiveAssignment
    // Products
    // MyModal
    // Users
    ProductList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
