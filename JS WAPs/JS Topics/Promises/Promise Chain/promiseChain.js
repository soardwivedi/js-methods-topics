

const cart = ["shoes", "pants", "kurt"];

createOrder(cart) //orderId
.then(function(orderId){
   console.log(orderId);
   return orderId;
})
.then(function(orderId) {
   return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo); 
    return newOrderId;
})
.then(function(newOrderId){
    console.log(newOrderId);
    return newOrderId
})
.then(function(newOrderId){
    console.log(newOrderId);
    return updateWalet();
})
.then(function(balanceOfWaletIs){
    console.log(balanceOfWaletIs);
    return balanceOfWaletIs;
})
.catch((err)=> {
    console.log(err.message);
} )

// Producer

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
//createOrder
//validateCart
//orderId
if(!validateCart(cart)) {
    const err = new Error("Cart is not valid.")
    reject(err)
}
 
//logic for create order

const orderId = "12345";
if(orderId){
    setTimeout(function(){
        resolve(orderId);
    }, 5000)
    
}
    })

    return pr;
}

function proceedToPayment(orderId) {
    //
    return new Promise((resolve, reject)=> {
        resolve("Payment Successful.")
    })
}
const newOrderId = "54321"
function showOrderSummary(newOrderId){
    return new Promise((resolve, reject)=>{
        resolve("Yuor order summary is ready.")
    })
}

let waletBalance = "500 Rs."
function updateWalet(){
    return new Promise((resolve, reject)=>{
     resolve(`Your walet balance is ${waletBalance}`)
    })
}

function validateCart(cart){
    return true;
} 

