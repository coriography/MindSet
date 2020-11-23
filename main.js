// TODO: maybe change button functions to actually assigning css styles within the javascript?
// TODO: fix screen animation on refresh
// TODO: comment all code, clean up current comments MAKE IT SNAPPY
// TODO: check out innerHTML vs. textContent - different in some ways
// TODO: clean up var vs. let

// * GLOBAL FUNCTIONS AND VARIABLES //

const body = document.getElementById("body");

//Creates a global variable currentCat for "state", i.e. which category has been selected
let currentCat = "blank";

//Updates global variable based on button click
function updateCurrentCat(data) {
	currentCat = data;
	console.log(currentCat);
}

//Stores all affirmations in an array of objects organized by category
var affirmations=[
	{
		category: "learning",
		color: "#47682C",
		strings: [
			"learning string one My mind is open, my space is calm, and I can let go of all distractions.",
			"learning string two",
			"learning string three"
		]
	},
	{
		category: "confidence",
		color: "#BA8F95",
		strings: [
			"confidence string one",
			"confidence string two",
			"confidence string three"
		]
	},
	{
		category: "creativity",
		color: "#390040",
		strings: [
			"creativity string one",
			"creativity string two",
			"creativity string three"
		]
	},
	{
		category: "rest",
		color: "#2B4162",
		strings: [
			"rest string one",
			"rest string two",
			"rest string three"
		]
	},
	{
		category: "connection",
		color: "#922D50",
		strings: [
			"connection string one",
			"connection string two",
			"connection string three"
		]
	},
	{
		category: "time",
		color: "#50808E",
		strings: [
			"time string one",
			"time string two",
			"time string three"
		]
	},
];


// * CATEGORIES (MAIN) SCREEN //

//Creates a button element for each item in the affirmations object where "strings" is not empty
var catButtons = `
	${affirmations
		.filter(item => item.strings.length > 0)
		.map(item => 
			`<button type="button" id="${item.category}" class="cat-button" style="background-color: ${item.color}" onclick="updateCurrentCat('${item.category}')">
				<h2 class="cat-text">${item.category}</h2>
			</button>
			`)
		.join('')}
`;

//Displays the button elements
let catBtnContainer = document.querySelector('#catButtons');
catBtnContainer.innerHTML = catButtons;


// * AFFIRMATION SCREEN //

// ? Displays the current category
// TODO: I think I need to add some kind of action... event listener? 
// ? global var seems to update within updateCurrentCat()
// ? but when I reference it elsewhere it's blank
let affHeading = `Positive affirmations for ${currentCat}`;
let affCat = document.querySelector('#affCat');
affCat.innerHTML = affHeading;


// ? filter for current category and assign to new var
// ? map over obj and format to just be array of strings?
// ? then can use that index thingy

// TODO: change below from "time" to currentCat
var currentList = affirmations.filter(item => item.category == "time")[0];


function generateNew() {
    //Generates a random index to retrieve a random affirmation from the list
    let index = Math.floor(Math.random()*currentList.strings.length); 
    
    //Stores randomly generated affirmation in a variable
	let currentAff = currentList.strings[index];
	
    //Finds HTML div with an ID of aff-text and sets its content to the affirmation variable
    let affText = document.querySelector('#affText');
	affText.innerHTML = currentAff;
}


// * NAVIGATION FUNCTIONS //

//A button that calls this function clears any open screens to reveal the categories screen.
//It removes the body classes that control relevant animations.
//It also resets the global variable that controls what category we're in.
function goToCats() {
	if (body.classList.contains("aff-open")) {
		body.classList.remove("aff-open");
	}
	if (body.classList.contains("howto-open")) {
		body.classList.remove("howto-open");
	} 
	currentCat = "";
}

//A button that calls this function clears any open screens and opens the affirmations screen.
//It adds and removes the body classes that control relevant animations.
function goToAff() {
	if (body.classList.contains("howto-open")) {
		body.classList.remove("howto-open");
	} 
	body.classList.add("aff-open");
	alert(currentCat);
}

//A button that calls this function opens the how-to screen.
//It adds the body class that controls relevant animations.
function goToHowTo() {
	body.classList.add("howto-open");
}