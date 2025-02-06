async function fetchPayUPaymentBYPaymentID(paymentId) {
    return new Promise((resolve, reject) => {
      // paymentId = “ORDAe2nqm2myw38”;
      let merchant_key = (NODE_ENV == “production”) ? “eGS3ak” : “Mcllbr”
      let payu_salt = (NODE_ENV == “production”) ? 
      let url = (NODE_ENV == “production”) ? “https://info.payu.in/merchant/postservice?form=2” : “https://test.payu.in/merchant/postservice.php?form=2”
      let hash = sha512(merchant_key + “|verify_payment|” + paymentId + “|” + payu_salt);
      var options = {
        ‘method’: ‘POST’,
        ‘url’: url,
        ‘headers’: {
          ‘Content-Type’: ‘application/json’,
        },
        formData: {
          ‘key’: merchant_key,
          ‘command’: “verify_payment”,
          ‘hash’: hash,
          ‘var1’: paymentId
        }
      };
      console.log(“xxxxxx”,options)
      request(options, function (error, response) {
        if (!error) {
          resolve(JSON.parse(response.body))
        } else {
          resolve(false)
        }
      });
    });
  }


  if (records && records.status == 1) {
    let transactionCharge = records.transaction_details
    if (transactionCharge[data[i].payment_order_id]) {
      let finaldata = transactionCharge[data[i].payment_order_id]
      if (finaldata.status == "success" && finaldata.unmappedstatus == "captured") {
        await LayersPlacesBooking.updateOne({
          _id: new ObjectId(data[i]._id)
        }, {
          is_pg_sync: 1,
          pg_type: "PAYU",
          is_payment_done: 1
        })
      }
    }
  }













      // Perform the request using axios
      axios(options)
      .then(response => {
        resolve(JSON.parse(response.body)); // Assuming response.data contains the response body
      })
      .catch(error => {
        console.error('Error occurred:', error);
        resolve(false); // Resolving with false in case of an error
      });