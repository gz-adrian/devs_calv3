
//     compute() {
//       let computation
//       const prev = parseFloat(this.previousOperand)
//       const current = parseFloat(this.currentOperand)
//       if (isNaN(prev) || isNaN(current)) return
//       switch (this.operation) {
//           case '+':
//               computation = prev + current
//               break
//           case '-':
//               computation = prev - current
//               break
//           case '*':
//               computation = prev * current
//               break
//           case '÷':
//               computation = prev / current
//               break
//           default:
//               return
//       }
//       this.currentOperand = computation
//       this.operation = undefined
//       this.previousOperand = ''
//   }

//   getDisplayNumber(number) {
//       const stringNumber = number.toString()
//       const integerDigits = parseFloat(stringNumber.split('.')[0])
//       const decimalDigits = stringNumber.split('.')[1]
//       let integerDisplay
//       if (isNaN(integerDigits)) {
//           integerDisplay = ''
//       } else {
//           integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//       }
//       if (decimalDigits != null) {
//           return `${integerDisplay}.${decimalDigits}`
//       } else {
//           return integerDisplay
//       }
//   }

//   updateDisplay() {
//       this.currentOperandTextElement.innerText =
//           this.getDisplayNumber(this.currentOperand)
//       if (this.operation != null) {
//           this.previousOperandTextElement.innerText =
//               `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//       } else {
//           this.previousOperandTextElement.innerText = ''
//       }
//   }
// }
///

///////
// testing here Data.



// numberButtons.forEach(button => {

//


///note might be needed.


// equalsButton.addEventListener('click', button => {
//   calculator.compute()
//   calculator.updateDisplay()
// })

// allClearButton.addEventListener('click', button => {
//   calculator.clear()
//   calculator.updateDisplay()
// })