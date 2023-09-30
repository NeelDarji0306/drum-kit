// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked")
// }


// document.querySelector("button").addEventListener("click",function () { //anonymous function
//     alert("I got clicked")
// });



var numberOfButtonsForDrum = document.querySelectorAll(".drum").length
// OR  var numberOfButtons = document.querySelectorAll(".set button").length



//   dETECTING BUTTON PRESS
for(var i = 0 ; i < numberOfButtonsForDrum ; i++){

    document.querySelectorAll("button")[i].addEventListener("click",function () { //anonymous function
            // alert("I got clicked")


            // var audio = new Audio("sounds/tom-1.mp3");
            // audio.play();


            // console.log(this);
            // console.log(this.innerHTML);
            // this.style.color = "white";


            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);

    });
}



//for keys -keydown  DETECTING KEYBOARD PRESS
document.addEventListener("keydown",function(event){ 
    // alert("A key is pressed.")
    // console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
});




function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);
            break;
    }
}


function buttonAnimation(currentKey){

    var activateButton = document.querySelector("."+currentKey);

    activateButton.classList.add("pressed");

    setTimeout(function(){
        activateButton.classList.remove("pressed");
    },100);
}