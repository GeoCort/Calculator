class Calculator{
    constructor(previousOperandText, currentText){
        this.previousOperandText = previousOperandText
        this.currentText= currentText
        this.clear()
        this.prevResult = ""
    }
    clear(){
        this.currentOperand=""
        this.previousOperand=""
        this.operation = undefined
        this.prevResult = ""
    }
    delete(){
       this.currentOperand = this.currentOperand.slice(0,-1)
    }
    append(str){
        if(str == "." && this.currentOperand.includes(".")){
            return;
        }
        this.currentOperand = `${this.currentOperand + str}`
    }
    chooseOperation(op){
        if (this.currentOperand === "") return;
        if(this.previousOperand !== ""){
            this.compute();
        }
        this.operation = op
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }
    compute(){
         let result;
         let prev = parseFloat(this.previousOperand)
         let post = parseFloat(this.currentOperand)
         if(!prev || !post) return // no 2 operands
         switch(this.operation){
            case '+':   
                result = prev + post
                break
            case '-':
                result = prev - post
                break
            case '*':
                result = prev * post
                break
            case '/':
                if(post == 0){
                    result = null
                }
                result = prev / post
                break
            default:
                return;
         }
        this.currentOperand = result
        this.prevResult = result
        this.operation = undefined
         this.previousOperand = ""

    }
    updateDisplay(){
        currentText.innerText = this.currentOperand
        previousOperandText.innerText = this.previousOperand
    }
}

let numbers= document.querySelectorAll("[data-number]") // numbers
let operation = document.querySelectorAll("[data-operand]") 
let equal = document.querySelector("[data-equals]")
let del = document.querySelector("[data-delete]")
let clear= document.querySelector("[data-clear]")
let previousOperandText= document.querySelector("[data-previous]")
let currentText = document.querySelector("[data-current]")
let calc = new Calculator(previousOperandText,currentText)
numbers.forEach(button =>{
    button.addEventListener("click", ()=>{
        calc.append(button.innerText)
        calc.updateDisplay()
    })
})

operation.forEach(button =>{
    button.addEventListener("click", ()=>{
        calc.chooseOperation(button.innerText)
        calc.updateDisplay();
    })
})
del.addEventListener("click",()=>{
    calc.delete();
    calc.updateDisplay()
})
clear.addEventListener("click",()=>{
    calc.clear();
    calc.updateDisplay()
})
equal.addEventListener("click",()=>{
    calc.compute()
    calc.updateDisplay()
})