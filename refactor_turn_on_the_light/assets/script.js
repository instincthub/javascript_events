// Target switch and bulb tags
const switchBtn = document.getElementById('roundBtn')
const switchBtnInput = document.getElementById('id_switch')
const myImage = document.getElementById('myImage')

// Function: If the checkbox is checked, display the output text
function toggleBulb() {
  if (switchBtnInput.checked === false){
    myImage.src = "assets/bulbon.png";
  } else if (switchBtnInput.checked === true) {
    myImage.src = "assets/bulboff.png";
  }
}

// Event handler
switchBtn.addEventListener('click', toggleBulb)
