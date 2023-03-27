function coinToss() {
  var randomNumber = Math.floor(Math.random() * 2 + 1);
  var randomNumberImg = "C" + randomNumber + ".png";
  var randomImgSource = "images/" + randomNumberImg;

  var cT = document.querySelector("img");
  cT.setAttribute("src", randomImgSource);

  if (randomNumber === 1) {
    document.querySelector("h4").innerHTML = "Heads";
  } else {
    document.querySelector("h4").innerHTML = "Tails";
  }
}
