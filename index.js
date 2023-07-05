const getRandomNumber = () => Math.floor(Math.random() * 10);

const getNumber = () => {
  // get random lucky number
  document.getElementById("randomNumber").innerHTML = getRandomNumber();
  // get the first ball's number
  document.getElementById("ball1").innerHTML = getRandomNumber();
  // get the second ball's number
  document.getElementById("ball2").innerHTML = getRandomNumber();
  // get the third ball's number
  document.getElementById("ball3").innerHTML = getRandomNumber();
  // get the fourth ball's number
  document.getElementById("ball4").innerHTML = getRandomNumber();
  // get the fifth ball's number
  document.getElementById("ball5").innerHTML = getRandomNumber();
};

