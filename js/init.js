// some standard initializations; don't mess with these

var counter = 0,
    score = 0;

// your quiz data should go into this variable in object form -- one object per item. sample format below:

/* 

{
  "name": "Nomad's Dream",
  "type": "trek"
}

*/

var content = 
[{"name":"Trump and his wife treated to delicacies by SKorean 1st lady","answer":"trek"},
{"name":"Power Plant In Sweden Is Burning H&M Clothes Instead Of Coal","answer":"trek"},
{"name":"New Study Shows: Reality TV is Promoting Inflation","answer":"polish"},
{"name":"One retailer is giving free crypto on cybermonday","answer":"polish"},
{"name":"Man Who Shot At Church Gunman Speaks Out: I’m No Hero","answer":"trek"},
{"name":"Tax cuts for North Korea are possible, Trump says","answer":"polish"},
{"name":"Pope Says No Phones in Church. Parishioners Keep Scrolling.","answer":"trek"},
{"name":"Sia makes paparazzi butt of the joke by posting nude picture herself","answer":"trek"},
{"name":"NFL man of the year and Merkel to meet in Sinai","answer":"polish"},
{"name":"Hollywood loses credibility over police scandal","answer":"polish"}
];

// assigning the commonly accessed dom elements to variables

var $name = $('.name'),
    $generate = $('.generate'),
    $result = $('.results'),
    $score = $('.score'),
    $thanks = $('.thanks'),
    $options = $('.options');

var trekApp = {};

// the initial state of the quiz:
// starts off by showing the "name" value in the first item in the data object
// hides the 'next' button, results, score and 'thanks for playing' html as a default

trekApp.init = function() {
  var selection = content[counter];
  type = selection["answer"];
  $name.html(selection["name"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}

// the function for moving through the quiz

trekApp.generate = function() {

  // if there are still questions remaining, show the next one
  
  if (counter < content.length) {
    var selection = content[counter];
    $name.html(selection["name"]);
    type = selection["answer"];  

    $result.hide();
    $score.hide();
    $name.show();
    $options.show();

  // if there are no more questions, thank the user for playing and give the option to tweet the score
  
  } else {
    $thanks.show().append(" <a href='http://twitter.com/home?status=Take the fake headlines quiz! I scored " + score + " out of " + counter + " http://ai-headlines.herokuapp.com' target='_blank'>Tweet your score</a>.");
  }

  $generate.hide();
}

// the event handler that determines whether the user's selection was right

$('.choice').click(function(e) {
  var chosenAnswer = e.target.id;  
  $result.show();
  $score.show();
  $name.hide();
  $options.hide();

  // setting up "full sentence" values for each type -- add else if statements if you have more than two possibilities
  
  if (type == "trek") {
    fullAnswer = "Real";
  } else {
    fullAnswer = "Fake";
  }
   
  // tell the user whether they're right or wrong, and add a point to the score if they're right

  if (chosenAnswer == type) {
    $result.html("<span class='right'>Well Done!</span> It's " + fullAnswer + ".");
    score++;
  } else {
    $result.html("<span class='wrong'>Dammit!</span> It's " + fullAnswer + ".");
  }
  counter++;
  $score.html("You're " + score + " for " + counter + ".");
  $generate.show();
  
});

$(document).ready(function() {
  trekApp.init();
});

$generate.on('click', function() {
  trekApp.generate();
});