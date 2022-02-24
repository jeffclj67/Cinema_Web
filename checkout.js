function calculateTotal() {
    var oSnacks = document.getElementsByName("selectedsnack");
    var oTickets = document.getElementsByName("selectedticket");

    var snacksPrice = 0;
    for (var index = 0; index < oSnacks.length; index++) {
        if (oSnacks[index].checked) {
            snacksPrice += Number(oSnacks[index].value);
        }
    }
    console.log(snacksPrice)

    var ticketsPrice = 0;
    for (var index = 0; index < oTickets.length; index++) {
        if (oTickets[index].checked) {
            ticketsPrice += Number(oTickets[index].value);
        }
    }

    console.log(ticketsPrice)

    var totalPrice = snacksPrice + ticketsPrice;


    var subtotal = totalPrice;
    var total = subtotal * 1.13;
    var tax = total - subtotal;

    document.getElementById("totalPriceSnacks").innerHTML = "Snacks Price: $" + snacksPrice.toFixed(2);
    document.getElementById("totalPriceTickets").innerHTML = "Tickets Price: $" + ticketsPrice.toFixed(2);


    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);

}

window.onload = function () {
    calculateTotal();
}



function validateForm() {
    // var popcorn = document.getElementById("popcorn");
    // var pop = document.getElementById("pop");
    // var popHotdog = document.getElementById("pophotdog");
    // var yogurt = document.getElementById("yogurt");
    // var chocolate = document.getElementById("chocolate");
    // var combo1 = document.getElementById("combo1");
    // var combo2 = document.getElementById("combo2");
    // var combo3 = document.getElementById("combo3");

    // var isValid = true;
    // if (popcorn.value === "" || pop.value === "" || popHotdog.value === "" || yogurt.value === "" || chocolate.value === "" || combo1.value === "" || combo2.value === "" || combo3.value === "") {
    //     isValid = false;
    //     alert("Please select.");
    // }

    //     var single = document.getElementById("single");
    //     var double = document.getElementById("double");
    //     var family = document.getElementById("family");
    //     var party = document.getElementById("party");
    //     var threeD = document.getElementById("3d");
    //     var iMax = document.getElementById("imax");
    //     var vip = document.getElementById("vip");

    //     var isValid = true;
    //     if (single.value === "" || double.value === "" || family.value === "" || party.value === "" || threeD.value === "" || iMax.value === "" || vip.value === "") {
    //         isValid = false;
    //         alert("Please select.");
    //     }
    //     document.getElementsById("submit").disabled = !isValid;


    // }

    // var checkbox = document.forms["form"]["selectedsnack"].value;
    // if (checkbox == null) {
    //     alert("Please insert First Name.");
    //     return false;
    // }


    var firstName = document.forms["form"]["firstname"].value;
    if (firstName == "") {
        alert("Please insert First Name.");
        return false;
    }

    var lastName = document.forms["form"]["lastname"].value;
    if (lastName == "") {
        alert("Please insert Last Name.");
        return false;
    }

    var creditCard = document.forms["form"]["crdtnumb"].value;
    if (/^\d{16}$/.test(creditCard) == false) {
        alert("Please enter the right 16 digit credit card numbers.");
        return false;
    }

    var securityCode = document.forms["form"]["securitynumber"].value;
    if (/^\d{3}$/.test(securityCode) == false) {
        alert("Please enter your 3 digit security code.");
        return false;
    }

    var month = document.forms["form"]["mon"].value;
    if (month == "Please Select a Month") {
        alert("Please choose the date.");
        return false;
    }

    var day = document.forms["form"]["day"].value;
    if (day == "Please Select a Day") {
        alert("Please choose the date.");
        return false;
    }


    var email = document.forms["form"]["email"].value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        alert("Please enter the right email.");
        return false;
    }
}