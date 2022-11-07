"use strict"

const alertButton = document.getElementById("alert_button")

alertButton.addEventListener("click", () => {
  alert("Your computer has been compromised.")
})

const generatorButton = document.getElementById("generator_button")
const bigNumber = document.getElementById("big_number")

generatorButton.addEventListener("click", () => {
  const newNumber = Math.floor(Math.random() * 100)
  bigNumber.textContent = newNumber
})

const cloneButton = document.getElementById("clone_button")
const dotContainer = document.getElementById("dot_container")

cloneButton.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  const newDot = document.createElement("div")
  newDot.classList.add("dot")
  newDot.style.backgroundColor = "#" + randomColor
  dotContainer.appendChild(newDot)
})

const poggersImage = document.getElementById("poggers_image")

poggersImage.addEventListener("mouseover", () => {
  poggersImage.style.transition = "transform 0.2s ease-in-out"

  if (poggersImage.style.transform === "rotate(180deg)") {
    poggersImage.style.transform = "rotate(0deg)"
  } else {
    poggersImage.style.transform = "rotate(180deg)"
  }
})

const allButtons = document.getElementsByTagName("button")

for (const button of allButtons) {
  button.addEventListener("click", () => {
    button.style.border = "3px dotted pink"

    function turnOffBorder() {
      button.style.border = "none"
    }

    setTimeout(turnOffBorder, 1000)
  })
}
