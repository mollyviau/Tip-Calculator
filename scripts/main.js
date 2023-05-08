
// ------------------------------------ Tip Calculator Variables ------------------------------------------------------
var billAmount;
var tipPercent;
var tipAmount;
var total;
var totalNum;
var billAmountNum;
var tipPercentNum;
var tipAmountNum;
function onloadTest(){
    clearInputs();

}





//---------------------------------------------- Tip Calculator Code ---------------------------------------------------------------------------------------

// Button click event to calculate tips
function calculateTip() {

    // Assign the variables the values from the html inputs
    billAmount = document.getElementById("billInput").value;
    tipPercent = document.getElementById("tipPercentInput").value;
    tipAmount = document.getElementById("tipAmountInput").value;
    total = document.getElementById("totalInput").value;
   
    // Parse string variables into float numbers
    totalNum = parseFloat(total);
    billAmountNum = parseFloat(billAmount);
    tipPercentNum = parseFloat(tipPercent);
    tipAmountNum = parseFloat(tipAmount);

    // check to see if there is a bill amount before continuing
    if (billAmount != "")
    {
    // Replace this whole thing with a switch statement eventually
    // if there is a tip percentage
    if (tipPercent != ""){
        calculateByPercent();
    }
    // if there is a tip amount
    if (tipAmount !=""){
        calculateByAmount();
    }
    // if there is a total amount
    else if (total !=""){
        calculateByTotal();
    }
    // if there is not enough info
    else   {
        alert("Please enter a tip amount, total amount, or tip percentage.");
    
    }
}
else 
{
    alert("Please enter a bill amount.");
}
}
    
function clearInputs() {
    billInput.value = "";
    tipPercentInput.value = "";
    tipAmountInput.value = "";
    totalInput.value = "";
}    


function calculateByPercent() {
    tipPercent = tipPercent * 0.01;
    billAmountNum = parseFloat(billAmount);
    tipPercentNum = parseFloat(tipPercent);
    tipAmount = tipPercentNum * billAmountNum;
    tipAmountNum = parseFloat(tipAmount);
    total = tipAmountNum + billAmountNum;
    totalInput.value = total;
    tipAmountInput.value = tipPercent * billAmount;
}

function calculateByAmount() {
    tipAmountNum = parseFloat(tipAmount);
    billAmountNum = parseFloat(billAmount);
    tipPercentNum = (tipAmountNum / billAmountNum) * 100;
    total = tipAmountNum + billAmountNum;
    totalInput.value = total;
    tipPercentInput.value = tipPercentNum;

}

function calculateByTotal() {

}