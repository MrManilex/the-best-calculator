const numberOneEl = document.getElementById('num-one')
const numberTwoEl = document.getElementById('num-two')
const numberThreeEl = document.getElementById('num-three')
const numberFourEl = document.getElementById('num-four')
const numberFiveEl = document.getElementById('num-five')
const numberSixEl = document.getElementById('num-six')
const numberSevenEl = document.getElementById('num-seven')
const numberEightEl = document.getElementById('num-eight')
const numberNineEl = document.getElementById('num-nine')
const numberZeroEl = document.getElementById('num-zero')

const subtractEl= document.getElementById('subtract')
const addEl = document.getElementById('add')

// retrieve the number displayer by ID
const numDisplayEl = document.getElementById('num-displayer')

const clearEl = document.getElementById('clear')

// add event listeners to when the user clicks on the number div
numberOneEl.addEventListener('click', display)
numberTwoEl.addEventListener('click', display)
numberThreeEl.addEventListener('click', display)
numberFourEl.addEventListener('click', display)
numberFiveEl.addEventListener('click', display)
numberSixEl.addEventListener('click', display)
numberSevenEl.addEventListener('click', display)
numberEightEl.addEventListener('click', display)
numberNineEl.addEventListener('click', display)
numberZeroEl.addEventListener('click', display)

subtractEl.addEventListener('click', display)
addEl.addEventListener('click', display)

clearEl.addEventListener('click', clearDisplay)

function display() {
    if (numDisplayEl.innerText == 0) {
        // this asigns the text inside the number displayer as the initial number pressed/clicked on
        numDisplayEl.innerText = this.innerText
    } else if (this.innerText === '+' || this.innerText === '-') {
        console.log('PRESSED')
    } else {
        // If the second number is pressed.... Append the number pressed.
        numDisplayEl.innerText += this.innerText
    }

}

function clearDisplay() {
    // this function will be responsible for clearing all entries and memory
    numDisplayEl.innerText = 0
}