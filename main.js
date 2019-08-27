 var input=document.querySelector('input');
 var zero = document.getElementById("zero");
 var one = document.getElementById("one");
 var two = document.getElementById("two");
 var three = document.getElementById("three");
 var four = document.getElementById("four");
 var five = document.getElementById("five");
 var six = document.getElementById("six");
 var seven = document.getElementById("seven");
 var eight = document.getElementById("eight");
 var nine = document.getElementById("nine");
 var dot = document.getElementById("dot");
 var add = document.getElementById("add");
 var subtract = document.getElementById("subtract");
 var multiply = document.getElementById("multiply");
 var divide = document.getElementById("divide");
 var equal = document.getElementById("equal");
 var clear =  document.getElementById("clear");
 var reset = document.getElementById("reset");

 zero.addEventListener("click", function(){inputNumber(0);});
 one.addEventListener("click", function(){inputNumber(1);});
 two.addEventListener("click", function(){inputNumber(2);});
 three.addEventListener("click", function(){inputNumber(3);});
 four.addEventListener("click", function(){inputNumber(4);});
 five.addEventListener("click", function(){inputNumber(5);});
 six.addEventListener("click", function(){inputNumber(6);});
 seven.addEventListener("click", function(){inputNumber(7);});
 eight.addEventListener("click", function(){inputNumber(8);});
 nine.addEventListener("click", function(){inputNumber(9);});
 dot.addEventListener("click", function(){inputNumber('.');});
 add.addEventListener("click", function(){operation('add');});
 subtract.addEventListener("click", function(){operation('subtract');});
 multiply.addEventListener("click", function(){operation('multiply');});
 divide.addEventListener("click", function(){operation('divide');});
 clear.onclick= function(){
 	input.value='';
 };
 
 function inputNumber(num){
 	num.toString();
 	input.value=input.value+num;
 	parseFloat(input.value);
 }


 function operation(sign){
 	 var newValue= 0;
 	if(sign==='add'){
 		var firstValue = input.value;
 		input.value ='';
 		equal.onclick = function(){
 			var secondValue = input.value;
 			newValue= parseFloat(firstValue) + parseFloat(secondValue); 			
 			input.value = newValue
 			document.getElementById("history").innerHTML += (newValue + ' = ' + firstValue + ' + ' + secondValue + '\n'); 			
 		};
 	}
 	else if(sign==='subtract'){
 		var firstValue = input.value;
 		input.value ='';
 		equal.onclick = function(){
 			var secondValue = input.value;
 			newValue= parseFloat(firstValue) - parseFloat(secondValue);  			
 			input.value = newValue
 			document.getElementById("history").innerHTML += (newValue + ' = ' + firstValue + ' - ' + secondValue + '\n'); 			
 		};
 	}
 	else if(sign==='multiply'){
 		var firstValue = input.value;
 		input.value ='';
 		equal.onclick = function(){
 			var secondValue = input.value;
 			newValue= parseFloat(firstValue) * parseFloat(secondValue); 			
 			input.value = newValue
 			document.getElementById("history").innerHTML += (newValue + ' = ' + firstValue + ' * ' + secondValue + '\n'); 			
 		};
 	}
 	else if(sign==='divide'){
 		var firstValue = input.value;
 		input.value ='';
 		equal.onclick = function(){
 			var secondValue = input.value;
 			newValue= parseFloat(firstValue) / parseFloat(secondValue); 			
 			input.value = newValue
 			document.getElementById("history").innerHTML += (newValue + ' = ' + firstValue + ' / ' + secondValue + '\n'); 			
 		};
 	}
 }

