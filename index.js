const getNumber = () => {
    // get random lucky number
    document.getElementById("randomNumber").innerHTML = 
    Math.floor(Math.random() * 10);
    // get the first ball's number
    document.getElementById("ball1").innerHTML = 
    Math.floor(Math.random() * 10);
    // get the second ball's number 
    document.getElementById("ball2").innerHTML = 
    Math.floor(Math.random() * 10);
    // get the third ball's number 
    document.getElementById("ball3").innerHTML = 
    Math.floor(Math.random() * 10);
    // get the fourth ball's number
    document.getElementById("ball4").innerHTML = 
    Math.floor(Math.random() * 10);
    // get the fifth ball's number 
    document.getElementById("ball5").innerHTML = 
    Math.floor(Math.random() * 10);
}