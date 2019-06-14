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

$(document).ready(function(){
  $("form#beep").submit(function(event) {
    event.preventDefault();
    var beepVar = parseInt($("input#boop").val());                    //user input
    var beepArray = [];


    $("#beep-result").empty();                                        //will empty div #beep-results

    if (isNaN(beepVar) || beepVar <= 0) {                             //Will check if inputted number is not a number or negative, ends function if true
      $("#beep-result").append("<li>" + "Please enter a positive number." + "</li>");
      return;
    }

    for (var i = 0; i <= beepVar; i++) {                              //makes an array filled with numbers counting up until user inputted number is reached
      beepArray.push(i);
    }

    for (var j = 0; j < beepArray.length; j++) {                      //will run for every value in an array
      var arrayCheck = beepArray[j].toString();

      if (arrayCheck.includes("3")) {                                 //checks if a numeral is in the array, priority 3, 2, 1.
        beepArray[j] = "I'm sorry, Dave. I'm afraid I can't do that.";
      } else if (arrayCheck.includes("2")) {
        beepArray[j] = "Boop!";
      } else if (arrayCheck.includes("1")) {
        beepArray[j] = "Beep!";
      }

      $("#beep-result").append("<li>" + beepArray[j] + "</li>");       //before for loop ends, prints the value in the array to the web page
    }











 });
});
