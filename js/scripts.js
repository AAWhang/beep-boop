//takes user input number by form submit button
//fill an array with numbers up to the user's inputted numbers
//outputs that array in as a list on the web page
//write a loop that will check every value for 3 2 and 1 in that priority
//will replace values above as specified, 3 becomes "I'm sorry....", 2 becomes "Boop!", 1 becomes "Beep!"
//write an output that will reset on every form submit
//extra features:
//will return a message if not an number or a negative number
//will pop out little hal images, increasing by one every time it runs past a 3 in the output
//make a new button that will reverse the output from highest to lowest
//add a name form that will replace "Dave" in the 3 condition

function arrayFill(bV, bA){                                         //Because of the second button outside the form, makes more senese to move array filler into a function
  for (var i = 0; i <= bV; i++) {                                   //makes an array filled with numbers counting up until user inputted number is reached
    bA.push(i);
  }
}

function precheck(bV){                                               //Because of the second button outside the form, makes more senese to move clear and number check into a function
  $("#beep-result").empty();                                         //will empty div #beep-results

  if (isNaN(bV) || bV <= 0) {                                        //Will check if inputted number is not a number or negative, ends function if true
    $("#beep-result").append("<li>" + "Please enter a positive number." + "</li>");
    return;
  }
}

function checkPrint(bA, bN){                                          //Because of the second button outside the form, makes more senese to move check and print into a function
  for (var j = 0; j < bA.length; j++) {                               //will run for every value in an array
    var arrayCheck = bA[j].toString();

    if (bN.length == 0) {                                             //Adds a default name if no input is given
      bN = "Dave";
    }

    if (arrayCheck.includes("3")) {                                   //checks if a numeral is in the array, priority 3, 2, 1.
      bA[j] = "I'm sorry, " + bN + ". I'm afraid I can't do that.";
    } else if (arrayCheck.includes("2")) {
      bA[j] = "Boop!";
    } else if (arrayCheck.includes("1")) {
      bA[j] = "Beep!";
    }

    $("#beep-result").append("<li>" + bA[j] + "</li>");               //before for loop ends, prints the value in the array to the web page
  }
}

$(document).ready(function(){

  $("form#beep").submit(function(event) {
    event.preventDefault();
    var beepVar = parseInt($("input#boop").val());                    //user input number
    var beepName = $("input#boopName").val();                         //user input name
    var beepArray = [];

     arrayFill(beepVar, beepArray);                                   //Takes user input and fills an array counting up to user input number
     precheck(beepVar);                                               //clears output and checks if user number is valid
     checkPrint(beepArray, beepName);                                 //handles array value checks and prints to webpage
 });

 document.getElementById('btn2').onclick = function() {
   var beepVar = parseInt($("input#boop").val());                      //user input number
   var beepName = $("input#boopName").val();                           //user input name
   var beepArray = [];

     arrayFill(beepVar, beepArray);                                    //Takes user input and fills an array counting up to user input number
     precheck(beepVar);                                                //clears output and checks if user number is valid
     beepArray.reverse();                                              //reverses array before print
     checkPrint(beepArray, beepName);                                  //handles array value checks and prints to webpage
}



});
