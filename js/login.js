

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log("clicked login button")

    const phoneNumber = document.getElementById('input-phn-num').value;
    const pinNumber = document.getElementById('login-pin').value;
    console.log(phoneNumber,pinNumber)
})