const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')
const peopleTotal = document.querySelector('#people-total')
const peopleTip = document.querySelector('#people-tip')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const finalDiv = document.querySelector('#final')
const calculateButton = document.querySelector('#calculate')

billInput.addEventListener('input', handleBill)
tipInput.addEventListener('input', handleBill)
peopleInput.addEventListener('input', handleBill)
calculateButton.addEventListener('click', handleCalculate)

//Always do this when wanting to round numbers
const x = 9.123456
    // toFixed method rounds the number off to a fixed number of decimals
    x.toFixed(1) // 9.1
    x.toFixed(2) // 9.12

function handleBill() {
    const billValue = billInput.value
    const tipValue = parseFloat(tipInput.value)
    const peopleValue = parseInt(peopleInput.value)

    const tip = billValue * tipValue / 100
    const tipPeople = tip / peopleValue
    const total = parseInt(billValue) + tip
    const peopleBill = parseFloat(total/ peopleValue)

    displayTip.innerHTML = tip.toFixed(2)
    displayTotal.innerHTML = total.toFixed(2)  
    peopleTotal.innerHTML = peopleBill.toFixed(2)
    peopleTip.innerHTML = tipPeople.toFixed(2)

}

function handleCalculate() {
    finalDiv.style.display = "block"
    handleBill()
}



