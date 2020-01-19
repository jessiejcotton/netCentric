/*
 * Implement all your JavaScript in this file!
 */
 
var replace = true;
var operation = undefined;
var num1 = undefined;
var num2 = undefined;
var lastCall = false;
var anotherOne = undefined;


function operate(val1, val2, opCode) {
	if(opCode === 1) {
		return (parseFloat(val1)) * (parseFloat(val2));
	} else if(operation === 2) {
		if(parseFloat(val2) === 0) {
			return 'infinity';
		}
		return (parseFloat(val1)) / (parseFloat(val2));
	} else if(operation === 3) {
		return (parseFloat(val1)) - (parseFloat(val2));
	} else if(operation === 4) {
		return (parseFloat(val1)) + (parseFloat(val2));
	} else {
		return;
	}
}
 
$('button').click(function() {
	if($(this).val()){
		if(!replace) {
			var value1 = $(this).val();
			var value2 = document.getElementById('display').value
			document.getElementById('display').value = value2.concat(value1);
		} else {
			document.getElementById('display').value = $(this).val();
			replace = false;
		}
		lastCall = -1;
	}
});

$('#clearButton').click(function() {
	document.getElementById('display').value = '';
	num1 = undefined;
	num2 = undefined;
	operation = undefined;
	lastCall = undefined;
	lastCall = undefined;
});
	
$('#multiplyButton').click(function () {
	if(lastCall === 0) {
		operation = 1;
	} else {
		if(num1 !== undefined){
			num2 = document.getElementById('display').value;
			document.getElementById('display').value = operate(num1, num2, operation);
		}
		num1 = document.getElementById('display').value;
		replace = true;
		operation = 1;
		lasCall = 0;
	}
});

$('#divideButton').click(function () {
	if(lastCall === 0) {
		operation = 2;
	} else {
		if(num1 !== undefined){
			num2 = document.getElementById('display').value;
			document.getElementById('display').value = operate(num1, num2, operation);
		}
		num1 = document.getElementById('display').value;
		replace = true;
		operation = 2;
		lastCall = 0;
	}
});

$('#subtractButton').click(function () {
	if(lastCall === 0) {
		operation = 3;
	} else {
		if(num1 !== undefined){
			num2 = document.getElementById('display').value;
			document.getElementById('display').value = operate(num1, num2, operation);
		}
		num1 = document.getElementById('display').value;
		replace = true;
		operation = 3;
		lastCall = 0;
	}
});

$('#addButton').click(function () {
	if(lastCall === 0) {
		operation = 4;
	} else {
		if(num1 !== undefined){
			num2 = document.getElementById('display').value;
			document.getElementById('display').value = operate(num1, num2, operation);
		}
		num1 = document.getElementById('display').value;
		replace = true;
		operation = 4;
		lastCall = 0;
	}
});

$('#equalsButton').click(function () {
	if(lastCall !== 1) {
		anotherOne = num1;
		num2 = document.getElementById('display').value
		var result = operate(num1, num2, operation);
		document.getElementById('display').value = result.toString();
		num1 = undefined;
		num2 = undefined;
		replace = true;
		lastCall = 1;
	} else {
		num2 = document.getElementById('display').value
		var result = operate(anotherOne, num2, operation);
		document.getElementById('display').value = result.toString();
	}
});