import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { DirectiveAssignment } from '../directive-assignment/directive-assignment';
import { Products } from '../products/products';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives,
    // DirectiveAssignment
    Products
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
