const numberOne = document.getElementById('num-one')
const numberTwo = document.getElementById('num-two')
const numberThree = document.getElementById('num-three')
const numberFour = document.getElementById('num-four')
const numberFive = document.getElementById('num-five')
const numberSix = document.getElementById('num-six')
const numberSeven = document.getElementById('num-seven')
const numberEight = document.getElementById('num-eight')
const numberNine = document.getElementById('num-nine')
const numberZero = document.getElementById('num-zero')

// retrieve the number displayer by ID
const numberDisplayer = document.getElementById('num-displayer')

// add event listeners to when the user clicks on the number div
numberOne.addEventListener('click', display)
numberTwo.addEventListener('click', display)
numberThree.addEventListener('click', display)
numberFour.addEventListener('click', display)
numberFive.addEventListener('click', display)
numberSix.addEventListener('click', display)
numberSeven.addEventListener('click', display)
numberEight.addEventListener('click', display)
numberNine.addEventListener('click', display)
numberZero.addEventListener('click', display)

function display() {
    if (numberDisplayer.innerText == 0) {
        // this asigns the text inside the number displayer as the initial number pressed/clicked on
        numberDisplayer.innerText = this.innerText
    } else if (numberDisplayer.innerText !== 0) {
        // If the second number is pressed.... Append the number pressed.
        console.log(typeof this.innerText)
        numberDisplayer.innerText += this.innerText
    } else {
        console.log('error')
    }

}