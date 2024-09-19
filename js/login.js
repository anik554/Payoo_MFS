

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log("clicked login button")

    const phoneNumber = document.getElementById('input-phn-num').value;
    const pinNumber = document.getElementById('login-pin').value;
    
    if(pinNumber === "1234" && phoneNumber === "01734"){
        console.log("Login Succefully!")
        window.location.href = "./home.html"
    }else{
        alert("Wrong Information")
    }
})