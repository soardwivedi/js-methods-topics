function  process(response, data){
    let res = {};
    
    if (!response.data.getrcFullInfo) {
      res.jump = 0;
      res.message = {
        message: "Oops, We Don't service in this City. You can change the City. What would you like to do?",
        ignore: true
      };
      return res;
    }
  
    let msg = ``
    msg+=data["vehicleInformation"]+"<br/>"
    if( data["vehicleInformation"].includes("rc") || data["vehicleInformation"].includes("RC") || data["vehicleInformation"].includes(" registration certificate")
    || data["vehicleInformation"].includes("Registration certificate") || data["vehicleInformation"].includes("Registration Certificate")){
      const vehicleInformationData = response.data.getrcFullInfo;
      
      msg += "RC Number:" + vehicleInformationData.rc_number+"<br/>";
      msg += "Vehicle Engine Number: " + vehicleInformationData.vehicle_engine_number+"<br/>";
      msg += "Registered At: " + vehicleInformationData.registered_at+"<br/>";
      msg += "Financed: " + vehicleInformationData.financed+"<br/>";
      msg += "Financer: " + vehicleInformationData.financer+"<br/>";
      msg += "User Address: " + vehicleInformationData.permanent_address+"<br/>";
      if(vehicleInformationData.insurance_policy_number == "" || !vehicleInformationData.insurance_policy_number ){
        msg += "Insurance Policy Number: " + ""+"<br/>";
      }
      else if(vehicleInformationData.insurance_policy_number && vehicleInformationData.insurance_policy_number != ""){
        msg += "Insurance Policy Number: " + vehicleInformationData.insurance_policy_number+"<br/>";
      }
      msg += "User Name: " + vehicleInformationData.owner_name+"<br/>"
    }
    else{
      if(response.data.getrcFullInfo.challandata.length){
     
        const challanData = response.data.getrcFullInfo.challandata;
          for (let i = 0; i < challanData.length; i++) {
        msg += "Challan No:" + (i + 1)+"<br/>";
  
        msg += "Accused Name: " + challanData[i].accused_name+"<br/>";
  
        msg += "Challan Date: " + challanData[i].challan_date+"<br/>";
  
        msg += "Offense Details: " + challanData[i].offense_details+"<br/>";
      }
    
    }
    else{
          msg += "No challan data is available." +"<br/>";
      }
    }
    
    
    let vehicle_data=response.data.getrcFullInfo
    data.vehicleData = msg
  res.message = {
        message: msg,
        ignore: true
      };
      
      res.jump = 0;
      res.resetMemory = true
      return res;
    }
    