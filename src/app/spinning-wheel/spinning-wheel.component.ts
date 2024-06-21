import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceholderPipe } from "../placeholder.pipe";

@Component({
    selector: 'app-spinning-wheel',
    standalone: true,
    templateUrl: './spinning-wheel.component.html',
    styleUrl: './spinning-wheel.component.css',
    imports: [CommonModule, FormsModule, PlaceholderPipe]
})
export class SpinningWheelComponent  {
  // outcomes: string[]=['prize1','prize2', 'Try agaain','Bonus!']
  // result:string = ''
  // extraSpin: boolean = false;

  // spinWheel() {
  //   const randomIndex = Math.floor(Math.random() * this.outcomes.length);
  //   this.result = this.outcomes[randomIndex];
  //   if (this.result === 'Try Again') {
  //     this.extraSpin = true;
  //   } else {
  //     this.extraSpin = false;
  //   }
  // }

  Result = '';
  wheelOptions = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];
inputValue: any;

  spinWheel() {
    const result = this.wheelOptions[Math.floor(Math.random() * this.wheelOptions.length)];
    this.Result = result;

    if (result === 'Try Again') {
      setTimeout(() => {
        this.spinWheel();
      }, 2000);
    } else {
      this.Result = `Congratulations! You won ${result}`;
    }
  }

  

}
