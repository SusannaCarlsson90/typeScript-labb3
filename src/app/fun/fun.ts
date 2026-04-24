import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fun',
  imports: [FormsModule],
  templateUrl: './fun.html',
  styleUrl: './fun.css',
})
export class Fun {
  heroimage = "/images/IMG_0596.JPG";

    //Properties
    num1: number = 0;
    num2: number = 0;
    result: string | number = 0;

    //Methods
//Meter till fot
    convertToFeet(): void {
      const calculation = this.num1 * 3.28084;
      this.result = `${this.num1} meter är ${calculation.toFixed(2)} fot`;
    }

    //Fot till meter
   convertToMeters() : void {
      const calculation = this.num1 / 3.28084;
      this.result = `${this.num1} fot är ${calculation.toFixed(2)} meter`
    }

    //Celsius till fahrenheit

    convertToFahrenheit(): void {
      const calculation = (this.num1 * 9/5) + 32;
      this.result = `${this.num1}°C är ${calculation.toFixed(1)}°F`;
    }
//Fahrenheit till celsius
   convertToCelsis(): void {
      const calculation = (this.num1 -32) * 5/9;
     this.result = `${this.num1}°F är ${calculation.toFixed(1)}°C`;
    }
   
}

