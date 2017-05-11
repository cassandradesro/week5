////Delete // to activate function



//console.log("Hello Cassandra from main.js!");
///*
//Week 5 - Exercises
//Follow the instruction for each one of these exactly. If it says "a function that..." you need to write a function with the code inside it. 
//If it says "a variable..." then you just make a variable, without a function. 
//This way you can write one, then call the function from the console to test it. 
//Or call the function right after where you wrote it, and then when you're done testing it, comment out the function call.
//Either way, when you move on to the next one, your console wonâ€™t be cluttered up by the last.
//Unless otherwise stated, all these functions need logical names. Remember to name them based on what they do.
//*/
//
//// A function that receives 2 arguments (numbers), adds them together, and console logs the answer.
//function addTogether (arg1, arg2){   
//	return arg1 + arg2; 
//}
//
//console.log(addTogether(8,2));
//
//// A function that receives 1 argument (numbers), multiplies it by 2, and returns the answer.
//function multiplyTogether (arg){
//	return arg * 2
//}
//
//// A variable set to an array of strings, each one a common first name.
//
//var firstname = ["Stacy", "Ben", "Sarah", "John", "Mike",]
//
//// A function that console logs the first item in an array (the array you created above), then takes that item and moves it 
//// to the back of the array. Calling the function over and over should log each item in the array in turn, going back to the 
//// start after the last item, infinitely. 
//
//
//function sayMyName (){
//	console.log(firstname[0]);
//	firstname.push(firstname.shift());
//}
//
//// A variable set to an array of numbers.
//
//var numbers = [ 1, 2, 5, 11, 14, 19, 31,8, 62, 4, 10,]
//
//// A function that finds the highest number in an array of numbers and console logs it.
//
//function highestnumber (){
//	return Math.max(...numbers);
//
//}
//
//// A function that receives two strings, trims them (look it up), and then returns true if they match AND are not empty, 
//// otherwise returns false. This is a common function used in user registration forms, for the password and password again fields.
//function registration (str1, str2){
//	if (str1.trim() === str2.trim() && str1){
//		return true;
//	} else {
//		return false;
//	}
//
//}
//
////A function that rounds any number to the nearest multiple of 42 and returns it. This one has some math in it.
////function roundTo42 (num){
//	return Math.round(num/42) * 42;
//}
//
//
//// A function that logs â€œThe answer to the question is â€ followed by whatâ€™s returned from the above function with 37 
//// as the argument.
//
//	//sorry I have to tap out for this one...
//
//
//// A function that receives one argument, and logs something different depending of if the number is above 212, below 32, 
//// or in between. 
//
//function aboveBelowBetween (arg){
//	if (arg > 212){
//		console.log("Above 212");
//}	else if (arg < 32){
//		console.log("Below 32");
//}	else if (arg >= 32 && arg <= 212){
//		console.log("In Between");
//}
//// A function that receives 3 strings, a noun, a verb, and an adjective, and logs a sentence constructed with those words 
//// inserted.
//
//function sentence (str1, str2, str3){
//	console.log("She saw the " + str3 + " " + str1 + " " + str2 + " at Creative Circus.");
//}
//
//// A function that receives one argument, an array, and returns true if the array has more than 3 items, false if not.
//
//function morethan3 (arr){
//	if (arr.length > 3){
//		return true
//	} else {
//		return false
//	}
//}
//
//// A function that receives one argument, an array of numbers, and returns true if any item in the array equals 42.
//
//function equals42 (arr){
//	if (arr.indexOf(42) > -1){
//		return true
//	} else {
//		return false
//	}
//}
//
//// A function that receives two arguments, a number and a string, and logs the string to the console the number of times 
//// in the number argument.
//
//function numberAndString (num, str){
//	for (var i = 0; i < num; i++) { //start here, end here, go up
//		console.log(str, i)
//	}
//	//for (var i = num - 1; i >= 0; i--) {
//	//	console.log(str, i)
//	//}
//}
//
//// A function that console logs a phrase that gets funnier to more you read it.
//
//function funnyphrase (){
//	console.log("meh");
//	console.log("ha");
//	console.log("haha");
//	console.log("hahaha");
//	console.log("lol");
//	console.log("lmao");
//	console.log("lmaoooo");
//	console.log("rotflmao");
//	console.log("can't breathe");
//	console.log("i'm dying");
//	console.log("omg dead");
//}
//
//// A function that sets a timeout for 5 seconds, which calls the above function.
//
//function timeout () {
//	setTimeout (funnyphrase, 5000)
//}
//
//// A function that has a loop that happens 5 times, and each time it sets a timeout, each timeout a different random length 
//// between 1 and 5 seconds, to call the funny phrase function. (look up Math.random for random number generation)
//
//function loopme (){
//	for (var i = 0; i < 5; i++) {
//		setTimeout (funnyphrase, (1000 + Math.random() * 4000))
//	}
//}
//
//// A variable set to an array containing every letter in the alphabet (as strings) and every number for 0 through 9.
//
//var alphabetNumbers = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
//
//// A function that picks a random item from the above array and returns it
//function pickRandomItem () 	{
//	var randomItem = alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)]	//return randomItem 
//}
//
////A function that calls the above function 8 times, each time adding the returned value to a string, generating an eight 
////character long random alphanumeric string
//function alphanumericString (){ 
//	var formstring = "";
//	formstring += alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)];
//	formstring += alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)];
//	formstring += alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)];
//	formstring += alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)];
//	formstring += alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)];
//	formstring += alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)];
//	formstring += alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)];
//	formstring += alphabetNumbers[ Math.floor( Math.random() * alphabetNumbers.length)];
//	return formstring;
//}
////
//
//console.log(alphanumericString());
//
//// A variable called counter, thatâ€™s just the number 0.
//
//var counter = 0;
//
//
//
//// A function that adds 0.5 to that last number variable, then console logs it, but only if the number is still below 1000.
//
//function addAHalf (){
//	counter += 0.5;
//	if (counter < 1000) {
//		console.log(counter);
//	}
//}
//
//// A function that sets an interval for 1/30th of a second to call that last function. Once you get that working, 
//// consider how you might use logic like this to animate something on a webpage, such as the css left value of an element, 
//// making it slide to the right. Yep, animation is not really that complex.
//
//function callAddAHalf(){
//	var addTime = setInterval(addAHalf, 33);
//}
//
//// A function that cancels that timeout. Obviously, youâ€™ll need to call it pretty quickly after starting the timeout to see the effect.
//
//function stopAddAHalf(){
//	clearInterval(addTime);
//}
//// Bonus: Here's some code to fetch a DIV from the DOM, and adjust it's css left value. 
//// Work that into your interval function to make some animation happen.
//	
//	//document.getElementById("myDiv").style.left = "100px";







