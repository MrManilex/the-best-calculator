// retrieve elements and store in constants for manipulation
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

const clearEl = document.getElementById('clear')
const addEl = document.getElementById('add')
const subtractEl = document.getElementById('subtract')
const sumEl = document.getElementById('sum')

const numDisplayEl = document.getElementById('num-displayer')

// add event listeners to when the user clicks on the number div
numberOneEl.addEventListener('click', input)
numberTwoEl.addEventListener('click', input)
numberThreeEl.addEventListener('click', input)
numberFourEl.addEventListener('click', input)
numberFiveEl.addEventListener('click', input)
numberSixEl.addEventListener('click', input)
numberSevenEl.addEventListener('click', input)
numberEightEl.addEventListener('click', input)
numberNineEl.addEventListener('click', input)
numberZeroEl.addEventListener('click', input)

clearEl.addEventListener('click', clear)
addEl.addEventListener('click', operatorAssign)
subtractEl.addEventListener('click', operatorAssign)
sumEl.addEventListener('click', sum)


// set global variables
let firstInput = true
let entryOne = ''
let entryTwo = ''
let operator = ''

function input() {
    // store number that was clicked on
    let input = this.innerText

    // here we will decide if this is the first number entered as if you just turned on the calculator or just starting a new calculation
    if (firstInput) {
        numDisplayEl.innerText = input
        firstInput = false
        return
    }
    
    if (!firstInput) {
        // append the number pressed after the first one was entered
        numDisplayEl.innerText += input
    }

}

function operatorAssign() {
    // save first entry for calculation
    entryOne = numDisplayEl.innerText
    // save operator for further reference
    operator = this.innerText
    // show only the operator that was chosen 
    numDisplayEl.innerText = operator
    // change firstInput to start entering the next entry/input for calculation
    firstInput = true
}

function sum() {
    // save second entry
    entryTwo = numDisplayEl.innerText

    // conditionally do calculations based on operator variable
    if (operator === '+') { add() }
    if (operator === '-') { subtract() }
}

function add() {
    // change firstInput to start the next entry/calculation
    firstInput = true
    // parseInt turns variable from string to number to actually do the calculation. Set the display to show the answer.
    return numDisplayEl.innerText = parseInt(entryOne) + parseInt(entryTwo)
}

function subtract() {
    firstInput = true
    return numDisplayEl.innerText = parseInt(entryOne) - parseInt(entryTwo)
}

function clear() {
    // reset everything
    numDisplayEl.innerText = 0
    firstInput = true
    entryOne = ''
    entryTwo = ''
    operator = ''
}