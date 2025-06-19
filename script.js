let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

// The result of querySelectorAll() is a NodeList (not a real array).
// Array.from() makes it a real array so you can use .forEach().
function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}

let arr = Array.from(buttons);  // to traverse the operations in a loop we are using array

// Adds a click event to every button.
// When any button is clicked, it triggers the function inside.
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            // eval is a inbuilt js function that evaluate entire string mathematically
            
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            let lastChar = string[string.length - 1];
            let currentChar = e.target.innerHTML;

            if (isOperator(lastChar) && isOperator(currentChar)) return;
                string += currentChar;
                input.value = string;
            }
    })
})