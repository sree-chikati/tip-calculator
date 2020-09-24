const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')
const peopleTotal = document.querySelector('#people-total')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')


billInput.addEventListener('input', handleBill)
tipInput.addEventListener('input', handleBill)
peopleInput.addEventListener('input', handleBill)

function handleBill() {
    const billValue = billInput.value
    const tipValue = parseFloat(tipInput.value)
    const peopleValue = parseInt(peopleInput.value)

    const tip = billValue * tipValue / 100
    const total = billValue + tip
    const peopleBill = billValue / peopleValue

    displayTip.innerHTML = tip
    displayTotal.innerHTML = total  
    peopleTotal.innerHTML = peopleBill
}
handleBill()