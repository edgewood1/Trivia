var bank;
var keys;
var random;
var question;
var answers;
var wins;
var losses;
var timer;
var z;
var x;
var y;
var a;
var timeouts;
function restart(){
	timeouts=0;
	losses=0;
	wins=0;
	gameplay();
};

function gameplay() {

bank ={
"Breastfed children are less likely to have": ["Diarrhea", "Ear infections","Pneumonia","All of the above", 3, "The antibodies found in breastmilk help protect a child from many diseases and infections. Children who are breastfed also are less likely to develop allergies or obesity. Breastfeeding for at least 6 months also helps protect against sudden infant death syndrome (SIDS)."
],
"Besides protecting your child against disease, what is another advantage of breastfeeding?":["Breastmilk is easier to digest than formula","Breastmilk doesn't need to be prepared",'Breastmilk is free and readily available',"All of the above", 3, "Breastfeeding also helps mother and baby bond, because of the close physical contact involved."],
"How does breastfeeding help the mother?":["Breastfeeding helps you get back to your normal weight","Breastfeeding reduces your risk for ovarian cancer","Breastfeeding increases bone strength","A and B", 3, "Breastfeeding helps the uterus contract after delivery. It also cuts the risk for breast cancer in women who have not gone through menopause. Although a woman loses some bone mass when first breastfeeding (because breast milk contains calcium), breastfeeding does not increase the risk for osteoporosis. With a proper diet, your bone density recovers after you stop breastfeeding. Overall, the longer you breastfeed, the better it is for both you and your child. Women should continue breastfeeding for a year or more, if they want to."
],
"Although breastfeeding is natural, you may need help at first. Who can help you learn what to do?": ["A lactation consultant at the hospital where you deliver your child","Your pediatrician","A breastfeeding counselor","All of the above", 3, "Before your baby is born, talk with your healthcare provider about breastfeeding. It is best to start breastfeeding within the first hour after birth. Also ask that you and your baby stay together in the hospital as much as possible. During that time, your baby should be undressed on your bare chest--skin to skin--as much as possible. This will help you get a good start on breastfeeding. Many hospitals have lactation consultants on hand to help new mothers with breastfeeding. Check with your hospital for the name of a breastfeeding group in your area. Often these groups provide counseling and support for new mothers at no charge."], 
"Which is the most important hormone your body uses to make breastmilk?": ["Estrogen", "Prolactin", "Progesterone", "Insulin",1,"Prolactin stimulates mammary glands in the breast to make milk. Oxytocin stimulates the breast to release milk. Estrogen is found in many birth control pills and can decrease milk supply. Many types of birth control can be used with breastfeeding. Discuss breastfeeding and birth control with your healthcare provider"]
};
//This creates an array composed of all the keys
keys = Object.keys(bank);
random= Math.floor(Math.random()*keys.length); //holds a random number 
question = keys[random]; //holds the question
answers = bank[question];


// $("#qa").html(question);
$("#question").html(question);
$("#a1").html(answers[0] + "<br>");
$("#a2").html(answers[1] + "<br>");
$("#a3").html(answers[2] + "<br>");
$("#a4").html(answers[3] + "<br>");
x=setTimeout(timesUp, 5000);
		function timesUp(){
				$("#a1").html("Times Up!" + "<br>")
				clearTimeout(x);
				timeouts++;
				answers1();
				
			};

$(".answers").one("click", function(event){
	event.stopImmediatePropagation();
	clearTimeout(x);
	z=$(".answers").index(this);
	if (z===parseInt(answers[4])) { // you win
		$("#a1").html("Correct!" + "<br>");
		wins++;
	}
		else {  // you lose
		$("#a1").html("Incorrect! " + "<br>");
		losses++;
			}
			answers1();
			});//end event handler

function answers1() {
		$("#a2").html("The correct answer is:"+ "<br>");
		$("#a3").html("<br>");
		$("#a4").html(answers[answers[4]]+"<br>");	
		y=setTimeout(timesUp2, 3000);
		function timesUp2(){
				clearTimeout(y);
				info();
			};//timesup2
		};//answers1

function info(){
	$("#a1").html(answers[5]);
	$("#a2").html("");
		$("#a3").html("");
		$("#a4").html("");
		$(".article").attr("margin-bottom", "-70px");
		
a=setTimeout(timesUp3, 5000);
		function timesUp3(){
				clearTimeout(a);
				$(".article").attr("margin-bottom", "0");
				gameplay();
			};//timesup2
};

$("#score").html("Wins: " + "\xa0" + wins + "\xa0\xa0\xa0\xa0" + " Losses: " + losses + "\xa0\xa0\xa0\xa0" +  "Time Outs: " + timeouts);

}; //end gameplay

restart();
$("#button").on("click", function(){restart();}); 
// document.getElementById(qa).textContent(answers);