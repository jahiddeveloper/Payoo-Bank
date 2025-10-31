let vlaidPin = 200412;

document.getElementById("add-money-btn")
    .addEventListener('click', function (e) {
        e.preventDefault()

        let bank = document.getElementById("bank").value;
        let accountNumber = document.getElementById("account-number").value;
        let addAmount = parseInt(document.getElementById("add-amount").value);
        let pinNumber = document.getElementById("add-pin").value;

        let availableBalance = parseInt(document.getElementById("available-balance").innerText);

        if (accountNumber.length < 11) {
            alert("Please provid a vlaid account number.")
            return;
        }

        if (pinNumber != vlaidPin) {
            alert("Please provide a valid pin number.")
            return;
        }

        let newAvailableBalance = addAmount + availableBalance;
        document.getElementById("available-balance").innerText = newAvailableBalance;

        let addAmount2 = document.getElementById("add-amount");
        addAmount2.value = "";

    })

// feature toggleing

// add money button

document.getElementById("add-money")
    .addEventListener('click', function () {

        let forms = document.getElementsByClassName("form")

        for (let form of forms) {
            form.style.display = "none";
        }
        document.getElementById("add-money-form").style.display = "block";

        let formBtns = document.getElementsByClassName("form-btn")

        for (let btn of formBtns) {
            btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
            btn.classList.add("border-[#0808081a]")
        }

        document.getElementById("add-money").classList.remove("border-[#0808081a]");

        document.getElementById("add-money").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    })

// cash out button

document.getElementById("cashout")
    .addEventListener('click', function () {

        let forms = document.getElementsByClassName("form")

        for (let form of forms) {
            form.style.display = "none";
        }
        document.getElementById("cashout-form").style.display = "block";

        let formBtns = document.getElementsByClassName("form-btn")

        for (let btn of formBtns) {
            btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
            btn.classList.add("border-[#0808081a]")
        }

        document.getElementById("cashout").classList.remove("border-[#0808081a]");

        document.getElementById("cashout").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    })

// transfer money button

document.getElementById("transfer-money")
    .addEventListener('click', function () {

        let forms = document.getElementsByClassName("form")

        for (let form of forms) {
            form.style.display = "none";
        }
        document.getElementById("transfer-money-form").style.display = "block";

        let formBtns = document.getElementsByClassName("form-btn")

        for (let btn of formBtns) {
            btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
            btn.classList.add("border-[#0808081a]")
        }

        document.getElementById("transfer-money").classList.remove("border-[#0808081a]");

        document.getElementById("transfer-money").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    })

// get bousos

document.getElementById("get-bounos")
    .addEventListener('click', function () {

        let forms = document.getElementsByClassName("form")

        for (let form of forms) {
            form.style.display = "none";
        }
        document.getElementById("bonus-form").style.display = "block";

        let formBtns = document.getElementsByClassName("form-btn")

        for (let btn of formBtns) {
            btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
            btn.classList.add("border-[#0808081a]")
        }

        document.getElementById("get-bounos").classList.remove("border-[#0808081a]");

        document.getElementById("get-bounos").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    })

// pay bill

document.getElementById("pay-bill")
    .addEventListener('click', function () {

        let forms = document.getElementsByClassName("form")
        for (let form of forms) {
            form.style.display = "none";
        }
        document.getElementById("bill-form").style.display = "block";

        let formBtns = document.getElementsByClassName("form-btn")

        for (let btn of formBtns) {
            btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
            btn.classList.add("border-[#0808081a]")
        }

        document.getElementById("pay-bill").classList.remove("border-[#0808081a]");

        document.getElementById("pay-bill").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    })

// toggleing features

// withdraw btn

document.getElementById("withdraw-money-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();


        let agentNumber = document.getElementById("agent-number").value;
        let amount = parseInt(document.getElementById("amount").value);
        let pin = document.getElementById("pin").value;

        let availableBalance = parseInt(document.getElementById("available-balance").innerText);

        if (agentNumber.length < 11) {
            alert("Please provid valid agent number.")
            return;
        }

        if (pin != vlaidPin) {
            alert("Please Provid a valid pin number.");
            return;
        }

        let newAvailableBalance = availableBalance - amount;
        document.getElementById("available-balance").innerText = newAvailableBalance;

        let amount2 = document.getElementById("amount")
        amount2.value = "";
    })

// Transfer btn

document.getElementById("transfer-money-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();


        let userNumber = document.getElementById("user-number").value;
        let transferAmount = parseInt(document.getElementById("transfer-amount").value);
        let transferPin = document.getElementById("transfer-pin").value;

        let availableBalance = document.getElementById("available-balance").innerText;

        if (userNumber.length < 11) {
            alert("Please Provid valid user number.")
            return;
        }
        if (transferPin != vlaidPin) {
            alert("Please provid a valid pin number.")
            return;
        }

        let newAvailableBalance = availableBalance - transferAmount;
        document.getElementById("available-balance").innerText = newAvailableBalance;

        let transferAmount2 = document.getElementById("transfer-amount")
        transferAmount2.value = "";

    })

// get bounon btn

document.getElementById("get-bounos-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        let bounos = parseInt(200412);

        let bounosCopon = parseInt(document.getElementById("bonus-coupon").value);
        let availableBalance = parseInt(document.getElementById("available-balance").innerText);
        let bounosBanlance = parseInt(20);

        let newAvailableBalance = availableBalance + bounosBanlance;

        if (bounos == bounosCopon) {
            document.getElementById("available-balance").innerText = newAvailableBalance;

            let bounosCopon2 = document.getElementById("bonus-coupon")
            bounosCopon2.value = "";

            alert("Add $20 in your account.");
            return;
        }
        else {
            alert("Please write a valid copun code.")

            let bounosCopon2 = document.getElementById("bonus-coupon")
            bounosCopon2.value = "";
            return;
        }

    })

// bill btn

document.getElementById("bill-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        let bill = document.getElementById("bill").value;
        let billerAccountNumber = document.getElementById("biller-account-number").value;
        let billAmount = parseInt(document.getElementById("bill-amount").value);
        let billPin = document.getElementById("bill-pin").value;

        let availableBalance = parseInt(document.getElementById("available-balance").innerText);

        if (billerAccountNumber.length < 11) {
            alert("Please provid a valid biller account number.")
            return;
        }

        if (billPin != vlaidPin) {
            alert("Please provid a valid pin number.")
        }

        let newAvailableBalance = availableBalance - billAmount;
        document.getElementById("available-balance").innerText = newAvailableBalance;

        let billAmount2 = document.getElementById("bill-amount");
        billAmount2.value = "";
    })