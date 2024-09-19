

document.getElementById('btn-addMoney').addEventListener('click', function(event){
    event.preventDefault();

    const addAmount = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;
    const balance = document.getElementById("total-amount").innerText
    console.log(addAmount,pinNumber)

    if(pinNumber === "1234"){
        const totalAmount = parseFloat(balance) + parseFloat(addAmount)
        document.getElementById("total-amount").innerText = totalAmount
    }else{
        alert("Pin number not matched, try again")
    }
})

