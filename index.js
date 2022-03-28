/*document.getElementById("div1").innerHTML = "I used JavaScript!";
writes "I used JavaScript!"
*/
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
*/