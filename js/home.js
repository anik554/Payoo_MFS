
// Add Money Button
document.getElementById("btn-add-money").addEventListener("click",function(){
    document.getElementById("add-money-card").classList.remove('hidden')
    document.getElementById("add-cashOut-card").classList.add('hidden')
})

// // Cash Out Button
document.getElementById("btn-cash-out").addEventListener("click",function(){
    document.getElementById("add-cashOut-card").classList.remove('hidden')
    document.getElementById("add-money-card").classList.add('hidden')
})


// Add Money EnentHandler
document.getElementById('btn-addMoney').addEventListener('click', function(event){
    event.preventDefault();

    const addAmount = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;
    const balance = document.getElementById("total-amount").innerText;

    if(pinNumber === "1234"){
        const totalAmount = parseFloat(balance) + parseFloat(addAmount)
        document.getElementById("total-amount").innerText = totalAmount;
    }else{
        alert("Pin number not matched, try again")
    }
})

// CashOut Enent EnentHandler
document.getElementById('btn-cashOut').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = document.getElementById("input-add-money-cashOut").value;
    const cashOutPinNumber = document.getElementById("input-pin-number-cashOut").value;
    const balance = document.getElementById("total-amount").innerText

    if(cashOutPinNumber === "1234"){
        const cashOutBalance = parseFloat(balance) - parseFloat(cashOutAmount)
        document.getElementById("total-amount").innerText = cashOutBalance;
    }else{
        alert("Pin number not matched, try again")
    }
})
