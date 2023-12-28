let numbers = document.querySelectorAll(".btn") 
let display = document.querySelector("#display")
let numbersArr = Array.from(numbers) // numbers
let operand2 = false;

numbersArr.map((x)=>{
    x.addEventListener("click",()=>{
        if(display.innerText === "0"){
            display.innerText =""
        }
        let current = display.innerText;
        display.innerText=`${current+x.value}`
    })
})

function operate(first, operand, second){
    if(operand == "+"){
        return first + second
    }else if(operand == "-"){
        return first - second
    }else if(operand == "*"){
        return first * second
    }else{
        if(second === 0){
            return "NAN"
        }
        return first/second
    }
}
