console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let myNode1 = document.getElementById ("node1").innerHTML = "I used the getElementById(node1) method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let myNode2 = document.getElementById ("node1").innerHTML = "I used the getElementById(node2) method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let myH3 = document.getElementByTagName ("h3").innerHTML = "I used the getElementByTagName(h3) method to access this";
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let newParagraph = element.createElement("p").innerHTML = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
let newPChild = newParagraph.appendChild()
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let aTag = element.createElement("a").innerHTML =  "I am a <a> tag";
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
aTag.insertBefore(newParagraph);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
replaceChild();
// TODO: Remove the "New Child Node"
remove();
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
