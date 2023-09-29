/* 
  Author: Matthew McHenry
  File Name: script.js
  Today's Date: 9/27/2023
 */

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
