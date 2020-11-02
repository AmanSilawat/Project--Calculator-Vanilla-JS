function getHistory() {
    return document.getElementById('history-value').innerHTML;
}

function printHistory(num) {
    return document.getElementById('history-value').innerHTML = num;
}

function getOutput() {
    return document.getElementById('output-value').innerHTML;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById('output-value').innerHTML = num;
    } else {
        document.getElementById('output-value').innerHTML = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num=="-") {
        return '';
    }
    var n = Number(num)
    var value = n.toLocaleString('en');
    return value;
}

function reverseNumberFormate(num) {
    return Number(num.replace(/,/g, ''));
}

// get id on click opetators
var operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if( this.id == 'clear' ) {
            printHistory('');
            printOutput('');
        } else if( this.id == 'backspace' ) {
            var output = reverseNumberFormate(getOutput()).toString();

            //if output has a value
            if(output) {
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();

            if(output == '' && history != '') {
                if( isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
                }
            }
            if(output != "" || history != '') {
                
                output = output == ""
                    ? output
                    : reverseNumberFormate(output);

                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput (result);
                    printHistory('');
                } else {
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

// get id on click number
var number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var output = reverseNumberFormate(getOutput());

        // if Output is n number
        if(output != NaN) {
            output = output + this.id;
            printOutput(output)
        }
    });
}