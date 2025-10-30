let vlaidPin = 200412;

document.getElementById("add-money-btn")
    .addEventListener('click', function (e) {
        e.preventDefault()

        let bank = document.getElementById("bank").value;
        let accountNumber = document.getElementById("account-number").value;
        let addAmount = parseInt(document.getElementById("add-amount").value);
        let pinNumber = document.getElementById("add-pin").value;

        let availableBalance = parseInt(document.getElementById("available-balance").innerText); 

        if(accountNumber.length < 11) {
            alert("Please provid a vlaid account number.")
            return;
        }

        if(pinNumber != vlaidPin) {
            alert("Please provide a valid pin number.")
            return;
        }

        let newAvailableBalance = addAmount + availableBalance;
        document.getElementById("available-balance").innerText = newAvailableBalance;

        let addAmount2 = document.getElementById("add-amount");
        addAmount2.value = "";

    })