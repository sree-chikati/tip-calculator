const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const displayTip = document.querySelector('#tip')
const displayTotal = document.querySelector('#total')

billInput.addEventListener('input', handleBill)
tipInput.addEventListener('input', handleBill)
peopleInput.addEventListener('input', handleBill)

function handleBill() {
    const billValue = billInput.value
    const tipValue = tipInput.value
    
    const percent = paresInt(tipInput.value)

    const tip = bill * percent / 100
    const total = bill + tip

    displayTip.innerHTML = tip    
    
}
handleBill()