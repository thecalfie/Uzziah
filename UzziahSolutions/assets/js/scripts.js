// Nav Bar Settings

const hamburger = document.getElementById("HamBurger");
const menu = document.getElementById("NavBoxButtonContainer");

const listIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>`;

const closeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 1 1-.708-.708L7.293 8z"/>
</svg>`;

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");

    hamburger.innerHTML = menu.classList.contains("active")
        ? closeIcon
        : listIcon;
});




// Changing Text Landing Page Settings

const wordsList = [
    "Solar Power", 
    "Access Control", 
    "Electric Fencing", 
    "Clear View Fencing", 
    "CCTV Surveillance"
];

const typedWords = document.getElementById("ChangingText");

let wordIndex = 0;
let charIndex= 0;
let deleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;

function type(){
    const currentWord = wordsList[wordIndex];

    if(!deleting){
        typedWords.textContent = currentWord.substring(0, charIndex++);
        if(charIndex > currentWord.length){
            deleting = true;
            setTimeout(type,pauseTime);
            return;
        }
    } else{
        typedWords.textContent = currentWord.substring(0, charIndex--) || "\u00A0";
        if(charIndex < 0){
            deleting = false;
            wordIndex = (wordIndex + 1) % wordsList.length;
            charIndex = 0;
        }
    }
    setTimeout(type, deleting ? deletingSpeed : typingSpeed);
}

type();




//      Security Solutions
const serviceCards = document.querySelectorAll(".service-card");
const serviceBoxes = document.querySelectorAll('[id^="SecuritySolutions"][id$="_Box"]');

serviceCards.forEach(card => {

    card.addEventListener("click", () => {

        // Hide every box
        serviceBoxes.forEach(box => {
            box.classList.remove("active");
        });

        // Show selected one
        const target = document.getElementById(card.dataset.target);

        if(target){
            target.classList.add("active");

            // Optional smooth scroll

        }

    });

});