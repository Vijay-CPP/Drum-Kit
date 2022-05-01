// Will fetch each and every buttons as list
let buttons = document.querySelectorAll(".btn");
let numberOfButtons = buttons.length;


// for clicks

for (let index = 0; index < numberOfButtons; index++) {

    document.querySelectorAll(".btn")[index].addEventListener("click", function () {
        let button = this.classList[0];
        makeSound(button);
        buttonAnimation(button);
    });
}

// for keypress
document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    // for confirmation of key press
    console.log(key);

    switch (key) {
        case "a":
            var tom = new Audio("sounds/tom.mp3");
            tom.play();
            break;
        case "s":
            var foot = new Audio("sounds/foot.mp3");
            foot.play();
            break;
        case "k":
            var drum = new Audio("sounds/drum.mp3");
            drum.play();
            break;
        case "l":
            var cymbal = new Audio("sounds/cymbal.mp3");
            cymbal.play();
            break;
        default:
            console.log(key);
            break;
    }
}


function buttonAnimation(key) {
    let currentActiveButton = document.querySelector("." + key);
    currentActiveButton.classList.add("pressed");
    setTimeout(() => {
        currentActiveButton.classList.remove("pressed");
    }, 100);
}