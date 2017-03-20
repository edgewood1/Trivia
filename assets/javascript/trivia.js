var bank;
var keys;
var random;
var question;
var answers;
var z;
function restart(){

bank ={
"Breastfed children are less likely to have": ["Diarrhea", "Ear infections","Pneumonia","All of the above", 3],
"Besides protecting your child against disease, what is another advantage of breastfeeding?":["Breastmilk is easier to digest than formula","Breastmilk doesn't need to be prepared",'Breastmilk is free and readily available',"All of the above", 1],
"How does breastfeeding help the mother?":["Breastfeeding helps you get back to your normal weight","Breastfeeding reduces your risk for ovarian cancer","Breastfeeding increases bone strength","A and B", 2],
"Although breastfeeding is natural, you may need help at first. Who can help you learn what to do?": ["A lactation consultant at the hospital where you deliver your child","Your pediatrician","A breastfeeding counselor","All of the above", 3]
};
//This creates an array composed of all the keys
keys = Object.keys(bank);
random= Math.floor(Math.random()*keys.length); //holds a random number 
question = keys[random]; //holds the question
answers = bank[question];

// $("#qa").html(question);
$("#question").html("question");
$("#a1").html(answers[0] + "<br>");
$("#a2").html(answers[1] + "<br>");
$("#a3").html(answers[2] + "<br>");
$("#a4").html(answers[3] + "<br>");

$(".answers").one("click", function(event){
	event.stopImmediatePropagation();
	z=$(".answers").index(this);
	console.log(z);
	if (z===parseInt(answers[4])) { // you win
		console.log("you win");}
		else {  // you lose
			console.log("you lose");}
});



};
restart();

$("#button").on("click", function(){restart();}); 
// document.getElementById(qa).textContent(answers);