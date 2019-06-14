# _Beep Boop Website_

#### _A web page using html, css, boostrap, jquery and javascript that will take user input and output a list of numbers that changes based on rules and conditions, June 14, 2019_

#### By _**Aaron Whang**_

## Description

_This web page is created for the third Friday project assigned to the students of Epicodus Seattle May 28th class. This is a webpage that will take in a user input consisting of a number and a name, then will print out a list of numbers from 0 to the user's number except replacing any number that contains 1, 2 and 3 with a beep, a boop, or a famous movie phrase._

## Setup/Installation Requirements

* _clone repository off of Github_
* _run index.html in the google chrome browser_

Alternatively the webpage can be viewed at https://aawhang.github.io/beep-boop/

## Known Bugs

_The reverse feature won't reverse the image number because of the nature of how the code is designed, It will need to be approached in a new way to reverse that on button press_

## Specifications

* ___Spec:___ The program returns a range of numbers from 0 to the users inputted number
          * ___Input:___ "4"
          * ___Output:___ "0.1.2.3.4"

* ___Spec:___ The program returns an edited set of numbers. Any number that contains 1 (ie: 1, 10, 21, etc) with boop, 2 with beep and 3 with the phrase "I'm sorry, Dave. I'm afraid I can't do that." The priority is 3, 2 then 1
          * ___Input:___ "4"
          * ___Output:___ "0.boop.beep.I'm sorry, Dave. I'm afraid I can't do that.4"

* ___Spec:___ The program returns a message if the inputted number is not a number or a negative number.
          * ___Input:___ "d" or "-3"
          * ___Output:___ "Please enter a positive number."

* ___Spec:___ The program returns an image accompanying the condition that catches 3's, will add an extra image for every time the condition is met.
          * ___Input:___ "13"
          * ___Output:___ 3: "I'm sorry, Dave. I'm afraid I can't do that." <img> 13 "I'm sorry, Dave. I'm afraid I can't do that." <img><img>

* ___Spec:___ The program returns the reverse result on reverse button press
          * ___Input:___ "4"
          * ___Output:___ "4."I'm sorry, Dave. I'm afraid I can't do that." <img>.Beep.Boop.0"

* ___Spec:___ The program returns a the string "I'm sorry, Dave. I'm afraid I can't do that." with Dave replaced with inputted name.
          * ___Input:___ "4" "Frank"
          * ___Output:___ "0.boop.beep.I'm sorry, Frank. I'm afraid I can't do that <img>.4"

## Support and contact details

_For any questions about the website, code or content, please contact me at tlbhibiki@gmail.com_

## Technologies Used

_Written in html, css, bootstrap, javascript and JQuery_

### License

_All code and assets are created and owned by Aaron Whang_

Copyright (c) 2019 **_Aaron Whang_**
