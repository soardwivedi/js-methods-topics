function calculatePrice(price, gst){
    return price + ((price/100)*gst)
}

console.log(calculatePrice(5000, 18));