
document.getElementById("login-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();
        
        let number = 1797259399;
        let pin = 200412;

        let numberValue = document.getElementById("mobile-number").value;
        let numberValueConverted = parseInt(numberValue)

        let pinValue = document.getElementById("pin-number").value;
        let pinValueConverted = parseInt(pinValue);


        if(numberValueConverted === number && pinValueConverted === pin) {
            window.location.href = "./home.html"
        }
        else {
            alert("Invalid Creadentials")
        }
    })