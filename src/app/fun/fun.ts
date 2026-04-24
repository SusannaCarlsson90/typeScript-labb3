import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fun',
  imports: [FormsModule],
  templateUrl: './fun.html',
  styleUrl: './fun.css',
})
export class Fun {
  firstname: string = "Susanna";
  lastname: string = "Carlsson";


  members:string [] = ["Susanna", "Nico", "Marcus", "Nomi"]

  heroimage = "/images/IMG_0596.JPG";

  changeName(): void {
    this.firstname = "Lars";
    this.lastname = "Lundin";
  }

    //Properties
    num1: number = 1;
    num2: number = 2;
    result: number = 3;

    //Methods

    add(): void {
      this.result = this.num1 + this.num2;
    }

    subtract() : void {
      this.result = this.num1 - this.num2;
    }

    multiply(): void {
      this.result = this.num1 * this.num2;
    }

    divide(): void {
      this.result = this.num1 / this.num2;
    }
   
}

