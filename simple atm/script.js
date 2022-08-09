document.getElementById("btn").onclick = function() {
    var amount = document.getElementById("input").value;
    var notes = [1000, 500, 200,100, 50]; //notes
    var coinsBig = [20, 10, 5, 2]; //coins bigger than 20mm
    var coinsSmall = [1]; // coins smaller than 20mm
    //Combination of all currencies
    var allCurrency = notes.concat(coinsBig).concat(coinsSmall);
    //sorting all currencies descendingly
    allCurrency.sort(function(a, b) {
        return a - b
    }).reverse();
  
    if (amount < 1) {
	   alert("To withdraw money the amount must be atleast 1.")
        return amount;
    } else {
        var currentBill = 0;
        var numberOfCurrentBills = 0;

        for (var i = 0; i < allCurrency.length; i++) {
        currentBill = allCurrency[i];
        numberOfCurrentBills = parseInt(amount / currentBill);

        if (numberOfCurrentBills > 0) {
            if (notes.includes(currentBill)) {
            //Print in first text area.
            document.getElementById("txtArea1").value += numberOfCurrentBills + 'x' + currentBill + "\n";
            } else if (coinsBig.includes(currentBill)) {
            document.getElementById("txtArea2").value += numberOfCurrentBills + 'x' + currentBill + "\n";

            } else if (coinsSmall.includes(currentBill)) {
            document.getElementById("txtArea3").value += numberOfCurrentBills + 'x' + currentBill + "\n";

            }
            // update the amount
            amount = amount - (currentBill * numberOfCurrentBills);
        }
        }
    }};
    //To clear values with CLR button 
    function btnclear(){
        document.ATM.input.value = "";
        document.ATM.txtArea1.value="";
        document.ATM.txtArea2.value="";
        document.ATM.txtArea3.value="";
    }