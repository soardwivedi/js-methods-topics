function getUser(userId, callback) {
    setTimeout(() => {
      console.log("Fetched user");
      callback(null, { userId: userId, name: "John Doe" });
    }, 1000);
  }
  
  function getOrders(userId, callback) {
    setTimeout(() => {
      console.log("Fetched orders for user");
      callback(null, ["order1", "order2"]);
    }, 1000);
  }
  
  function getOrderDetails(orderId, callback) {
    setTimeout(() => {
      console.log("Fetched details for order:", orderId);
      callback(null, { orderId: orderId, product: "Laptop" });
    }, 1000);
  }
  
  function processOrderDetails(details, callback) {
    setTimeout(() => {
      console.log("Processed order details for:", details.orderId);
      callback(null, "Order processed successfully");
    }, 1000);
  }
  
  // Callback Hell
  getUser(1, (err, user) => {
    if (err) {
      console.error("Error fetching user");
      return;
    }
  
    getOrders(user.userId, (err, orders) => {
      if (err) {
        console.error("Error fetching orders");
        return;
      }
  
      getOrderDetails(orders[0], (err, details) => {
        if (err) {
          console.error("Error fetching order details");
          return;
        }
  
        processOrderDetails(details, (err, result) => {
          if (err) {
            console.error("Error processing order details");
            return;
          }
  
          console.log(result);
        });
      });
    });
  });
  

  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  mySecond();
  myFirst();


  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();