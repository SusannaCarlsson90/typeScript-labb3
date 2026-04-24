import { Component } from '@angular/core';

@Component({
  selector: 'app-fun',
  imports: [],
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

}

