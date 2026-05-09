import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, RemainingPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName = 'saChIn tEnDUlKaR';
  mySal = 5000;
  dateObj = new Date();
  user = { name: 'sanjay', role: 'trainer', address: 'Bangalore' };

  keepOriginalOrder = () => 0;

  cars = ['Tata', 'honda', 'maruti', 'hyundai', 'toyota'];

  msg = '';
}
