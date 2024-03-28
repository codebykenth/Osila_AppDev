import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  currentInput: string = '';
  history: string = '';
  firstNum: number = 0;
  secondNum: number = 0;
  answerNum: number = 0;
  isEqualsClick: boolean = false;
  opeClickStr: string = '';
  success: boolean = true; // If true all buttons can be click, else only the reset button can be click
  error: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  numClick(evt: any) {
    let btn = evt.target.textContent; // Button that is clicked
    if (this.success) {
      // will display the button number button that is clicked
      this.currentInput += btn;
      this.history += btn;
    }
  }

  opeClick(evt: any) {
    let btn = evt.target.textContent; // Button that is clicked

    if (this.success) {

      // Only set the first num value after operation is clicked
      if (this.firstNum === 0) {
        this.firstNum = Number(this.currentInput); // Initialize the value of first num
      }

      if ((this.currentInput.split(/[\+\-\*\/]/).length - 1) >= 1) {
        if (!(this.currentInput.split(/[\+\-\*\/]/)[1] === '')) {
          // Only do when operator button is click not equal button
          if (btn !== '=') {
            this.equalsClick(evt); // Will do what the equalsClick function does : Simultaneously do operations
          }
        }
        if (!this.success) {
          return; // Break out of function if there is an error. This will not read the code below of opeClick function
        }
      }

      this.currentInput += btn; // will display the current operator clicked
      this.history += btn; // will display the current operator clicked
      this.opeClickStr = btn; // will set based on what operation is clicked
    }
  }

  equalsClick(evt: any) {
    if (this.success) {
      // Gets the number after operation string
      this.secondNum = Number(this.currentInput.substring((this.currentInput.indexOf(this.opeClickStr) + 1)));

      // Perform operation based on the operation that is clicked
      switch (this.opeClickStr) {
        case '+': {
          this.answerNum = this.firstNum + this.secondNum;
          break;
        }
        case '-': {
          this.answerNum = this.firstNum - this.secondNum;
          break;
        }
        case '*': {
          this.answerNum = this.firstNum * this.secondNum;
          break;
        }
        case '/': {
          this.answerNum = this.firstNum / this.secondNum;
          break;
        }
      }

      // If number is divided by 0 - Infinite/Math Error/Not A Number
      if (this.answerNum === Infinity || this.answerNum === -Infinity || isNaN(this.answerNum)) {
        this.resetVal();
        this.currentInput = 'Math Error'; // Display the current answer
      } else if ((this.currentInput.split(/[\+\-\*\/]/).length - 1) > 1) {
        this.resetVal();
        this.currentInput = "Cannot use 2 consecutive operators before second number";
      } else {
        this.currentInput = this.answerNum.toString(); // Display the current answer
        this.firstNum = this.answerNum; // Set the first number to current answer
        this.success = true;
      }
    }
  }

  resetNum() {
    this.answerNum = 0;
    this.firstNum = 0;
    this.secondNum = 0;
  }

  resetVal() {
    this.error = true;
    this.success = false;
    this.resetNum();
    this.history = "Please click 'C' to reset";
  }

  // Reset all values
  clearClick(evt: any) {
    this.currentInput = '';
    this.history = '';
    this.resetNum();
    this.success = true;
    this.error = false;
  }
}
