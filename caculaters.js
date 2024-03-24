function add(a,b){
    return a+b;

}
function subtract(a,b){
    return a-b;
}
function subtract(a,b){
    return a*b;
}
function subtract(a,b){
    if(b==0){
        return 'Error! Division by zero is undefined';
    }else {
        return a/b;
    }
    }
    let operand1 = '';
    let operand2 = '';
    let operator = '';
    let result = '';
    
    function display(value) {
        document.getElementById("result").value += value;
    }
    
    function clearScreen() {
        document.getElementById("result").value = "";
        operand1 = '';
        operand2 = '';
        operator = '';
        result = '';
    }
    
    function backspace() {
        let value = document.getElementById("result").value;
        document.getElementById("result").value = value.substr(0, value.length - 1);
    }
    
    function calculate(op) {
        operand1 = parseFloat(document.getElementById("result").value);
        if (operator != '') {
            operand2 = parseFloat(document.getElementById("result").value);
            switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    if (operand2 != 0) {
                        result = operand1 / operand2;
                    } else {
                        alert("Cannot divide by zero");
                        clearScreen();
                        return;
                    }
                    break;
            }
            operator = op;
            document.getElementById("result").value = result;
        } else {
            operator = op;
            result = operand1;
        }
    }
    