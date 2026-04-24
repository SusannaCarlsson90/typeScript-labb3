import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fun',
  imports: [FormsModule],
  templateUrl: './fun.html',
  styleUrl: './fun.css',
})
export class Fun {
  heroimage = "/images/miniraknare.jpg";

    //Properties för tempereatur
    ceVal: number = 0;
    fhVal: number = 0;
    resTemp: string ="";

    //Properties för längd
meVal: number = 0;
ftVal: number = 0;
resLength: string = "";

    //Methods
//Meter till fot
    cMToFt(): void {
      const calculation = this.meVal * 3.28084;
      this.resLength = `${this.meVal} meter är ${calculation.toFixed(2)} fot`;
    }

    //Fot till meter
   cFtToM() : void {
      const calculation = this.ftVal / 3.28084;
      this.resLength = `${this.ftVal} fot är ${calculation.toFixed(2)} meter`
    }

    //Celsius till fahrenheit

    cCtoFh(): void {
      const calculation = (this.ceVal * 9/5) + 32;
      this.resTemp = `${this.ceVal}°C är ${calculation.toFixed(1)}°F`;
    }
//Fahrenheit till celsius
   cfhToC(): void {
      const calculation = (this.fhVal -32) * 5/9;
     this.resTemp = `${this.fhVal}°F är ${calculation.toFixed(1)}°C`;
    }
   
}

