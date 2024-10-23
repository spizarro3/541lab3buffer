// Grab elements
const billTotal = document.getElementById("billTotal");
const currencySelect = document.getElementById("currency-select");
const questionChecker = document.getElementById("?");


billTotal.addEventListener('input', GrandTotal)

//billTotal?GrandTotal(billTotal):console.log("false"); 

/** 
 * 
@param {billTotal, currency} Takes total bill 
*/

 function GrandTotal(){
    currency = .10
    const currentBillTotal = billTotal.value;
    console.log(currentBillTotal);
    const total = currentBillTotal - (currentBillTotal*currency);
    console.log(total) 
 }

 const hello = () => console.log("hi");

 function handleInput(event){
    hello();
    GrandTotal(billTotalv);
    
 }