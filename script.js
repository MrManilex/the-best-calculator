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

// retrieve the number displayer by ID
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


// global variables
let firstInput = true
// let secondInput = false
let entryOne = ''
let entryTwo = ''
let operator = ''

function input() {
    let input = this.innerText

    if (firstInput) {
        numDisplayEl.innerText = input
        firstInput = false
        return
    }

    if (!firstInput) {
        numDisplayEl.innerText += input
    }

}

function operatorAssign() {
    entryOne = numDisplayEl.innerText
    operator = this.innerText
    numDisplayEl.innerText = operator
    firstInput = true
}

function sum() {
    entryTwo = numDisplayEl.innerText

    if (operator === '+') { add() }
    if (operator === '-') { subtract() }
}

function add() {
    firstInput = true
    return numDisplayEl.innerText = parseInt(entryOne) + parseInt(entryTwo)
}

function subtract() {
    firstInput = true
    return numDisplayEl.innerText = parseInt(entryOne) - parseInt(entryTwo)
}

function clear() {
    numDisplayEl.innerText = 0
    firstInput = true
    entryOne = ''
    entryTwo = ''
    operator = ''
}