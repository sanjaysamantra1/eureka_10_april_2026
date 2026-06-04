import { Component } from '@angular/core';

@Component({
  selector: 'app-math-demo',
  imports: [],
  templateUrl: './math-demo.html',
  styleUrl: './math-demo.css',
})
export class MathDemo {
  add(a: number, b: number) {
    return a + b;
  }

  isEVen(num: number) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
