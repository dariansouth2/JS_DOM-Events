console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let myNode1 = document.getElementById ("node1").textContent = "I used the getElementById(node1) method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let myNode2 = document.getElementById ("node2")[0].textContent = "I used the getElementById(node2) method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let myH3 = document.getElementByTagName ("h3");
for (const h3 of myH3){
    h3.textContent = 
    "I used the getElementByTagName(h3) method to access this";
}
for (let i = 0; i < myH3.lenght; i++){
    console.log(myH3[i]);
    myH3[i].textContent = "I used the getElementByTagName (h3) method to access this";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let newParagraph = element.createElement("p").innerText = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
let newPChild = newParagraph.appendChild()
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let aTag = element.createElement("a").innerText =  "I am a <a> tag";
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
aTag.insertBefore(newParagraph);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const paragraphChildNode = document.createElement("p");
paragraphChildNode.textContent = "New Child Node";
const oldParagraphNode = document.querySelector("#N1");
document.querySelector("#exercise-container3")
.replaceChild(paragraphChildNode, oldParagraphNode);
// TODO: Remove the "New Child Node"
remove();
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
const unOrder = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
const liEle = document.createElement ("li");
liEle.textContent = "my list item"
// TODO: Append the new list items to the unordered list element
unOrder.append (liEle);
// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelectorAll (".exercise4")[0].append(unOrder);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function show (){
    const modalDiv = document.createElement("div");
    const modalCard = document.createElement ("div");
    const closeModalButton = document.createElement("button")
   
   //Modifying
    modalDiv.id = "modal";
    modalCard.classList.add ("modal-card");
    closeModalButton.textContent = "X"
    closeModalButton.classList.add("modal-close-button");
    closeModalButton.addEventListener("click", () =>{
        console.log("Close Modal clicked");
        modalDiv.remove();
        modalCard.remove();
    });

    //Appending items to DOM
    modalCard.append(closeModalButton);
    modalDiv.append(modalCard);
    document.querySelector("body").append(modalDiv);
}

const showButton = document.querySelector("#btn");
showButton.addEventListener("click", () =>{
    console.log("Show Modal button clicked");
    show();
})