// // An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed
// //  immediately after it is defined. It is a self-invoking function that doesn't require 
// //  explicit function calls to execute.

// (function() {
//     // Function code goes here
//     var name = "John";
//     var age = 30;
    
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//   })();





// Create a new MongoClient
const client = new MongoClient(url);

async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('products');

    // The prefix you want to search for
    const queryPrefix = "M2A";

    // Query the collection for documents where product_code starts with the prefix
    const products = await collection.find({ product_code: { $regex: '^' + queryPrefix, $options: 'i' } }).toArray();
    console.log('Matching products:', products);
  } finally {
    // Close the connection to the MongoDB server
    await client.close();
  }
}

run().catch(console.dir);
