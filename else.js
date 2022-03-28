/*document.getElementById("div1").innerHTML = "I used JavaScript!";
writes "I used JavaScript!"

function disappear(){
    document.getElementById("div1").innerHTML= "";
}
var counter = 3;
function changeImage(){
    if(counter % 3 == 0){
        document.getElementById("image").src = "dog.jpeg";
        counter++;
    }
    else if(counter % 3 == 1){
        document.getElementById("image").src = "cat.jpeg";
        counter++;
    }
    else{
        document.getElementById("image").src = "bird.jpeg";
        counter++;
    }
}
document.getElementById("button").addEventListener("click", changeImage);
*/
/*
var counter = 0;
function toggleColor(){
    if(counter % 2 == 0){
        document.getElementById("div1").style.color = "red";
        counter++;
    }
    else if (counter % 2 == 1){
        document.getElementById("div1").style.color = "black";
        counter++
    }
}

document.getElementById("button").addEventListener("click", toggleColor);


function changeDog(){
    document.getElementById("image").src = "dog.jpg";
}
function changeCat(){
    document.getElementById("image").src = "cat.jpg";
}
function changeBird(){
    document.getElementById("image").src = "bird.jpg";
}
document.getElementById("dog").addEventListener("click", changeDog);
document.getElementById("cat").addEventListener("click", changeCat);
document.getElementById("bird").addEventListener("click", changeBird);
*/
var animals = ["axolotl.jpeg", "bunny.jpeg", "hamster.jpeg"];
var counter = 0;
function forwardAnimal(){
    if(counter==2) counter = 0;
    else counter++;
    document.getElementById("image").src = animals[counter];
}
function backAnimal(){
    if(counter==0) counter = 2;
    else counter--;
    document.getElementById("image").src = animals[counter];

}
// document.getElementById("back").addEventListener("click", backAnimal);
document.getElementById("button").addEventListener("click", forwardAnimal);
