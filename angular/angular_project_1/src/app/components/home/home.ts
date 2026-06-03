import { MaterialDemo } from './../material-demo/material-demo';
import { Component } from '@angular/core';
// import { LargeComponent } from '../large-component/large-component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgComponentOutlet,
    MaterialDemo
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  largeComponent:any;

  constructor() {
    import('../large-component/large-component').then(m => {
      this.largeComponent = m.LargeComponent;
    });
  }
}
