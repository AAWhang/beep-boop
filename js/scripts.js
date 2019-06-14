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
    var beepVar = parseInt($("input#boop").val());
    var beepArray = [];

    for (var i = 0; i <= beepVar; i++) {
      beepArray.push(i);
    }

    for (var j = 0; j < beepArray.length; j++) {
      alert(beepArray[j]);
    }




    alert(beepArray);







 });
});
