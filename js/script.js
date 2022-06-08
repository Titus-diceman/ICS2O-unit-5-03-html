/* Created by: Titus Diceman
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit-5-03-html/sw.js", {
    scope: "/ICS2O-unit-5-03-html/",
  })
}

/**
 * This function displays the code for moive rating.
 */
function buttonClicked() {

  var over17 = document.getElementById("over17")
  var over13 = document.getElementById("over13")
  var over5 = document.getElementById("over5")


  if (over17.checked >= true) {
    document.getElementById("age").innerHTML =
    "you can see R rated movies"
  
  } else if (over13.checked >= true) {
    document.getElementById("age").innerHTML =
    "you can see PG rated movies"
  
  } else if (over5.checked >= true) {
    document.getElementById("age").innerHTML =
    "you can see G rated movies"
 
  } else {
    document.getElementById("age").innerHTML = 
      "You can't watch any moives kiddo"
  }
}