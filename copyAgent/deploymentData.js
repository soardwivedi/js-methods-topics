// agentTooldeploymentList(first: Int, offset: Int, is_custom_deployment: Int): [AgentToolDeploymentData] 162
// deploymentDetail // agentTooldeploymentDetail
// deploymentCopy
//         step1 - copy of selected deployment
//         step 2 - copy of all agents of selected deployment



// Location
//   name
//   address1
//   address2
//   city
//   state
//   country
//   pincode
//   phone_number
// Service
//   name
//   duration
//   description
//   price
//   discount
// Deploy -> Copy (Name change , description, icon ) change
// AgentType
//   -> rag ....... pdf modify
//   -> booking ......... Location Add , Service Add, Field customise
//   -> booking_info  ........ nothing


const data = {
  data: {
    agentTooldeploymentDetail: {
      deployment_name: "Travel",
      agents: ["65d8c3745bb27c5594c4afcf", "65e02d1dc23d75f365abe4cb"],
      auth_key: "4w635uvmzm17110932779twbb51f31m",
      capability: ["66139ad4e26b3a5acf343fed"],
      deployment_platform: ["kogo_store"],
      description:
        "Travel expert to help people book Hotels, Flights, Zoomcar and recommend amazing places and restaurants.",
      icon: "https://d15mcvsd48kerh.cloudfront.net/public/chatEmoji/deployment/17122266583738.png",
      is_paid: 0,
      is_published: 0,
      is_publishon_marketplace: null,
      is_supervisor_disable: false,
      is_wedget_available: null,
      payment_period: null,
      price: 0,
      questio_suggestions: ["✈️ Book a flight", "☀️ Tomorrows weather"],
      status: "1",
      system_message:
        "Travel expert to help people book Hotels, Flights, Zoomcar and recommend amazing places and restaurants.",
      tools: null,
      trial_period: null,
      trial_period_value: 0,
      vendorDetail: {
        _id: "65d868c8f99d3f86a19e80e0",
        email: "deepak@kogo.ai",
        fname: "Deepak",
        address: "Chirag Delhi",
      },
    },
  },
};

if (toolChainItem.type === "tool") {
  try {
    let newRefCapability = await CapabilitySchema.findOne({
      capability_copied_from: toolChainItem.ref_id,
    });

    if (newRefCapability) {
      toolChainItem.ref_id = newRefCapability._id;
    } else {
      console.log("newRefCapability is null for ref_id:", toolChainItem.ref_id);
    }
  } catch (error) {
    console.error("Error finding newRefCapability:", error);
  }
}

if (toolChainItem.type === "tool") {
  try {
    let newRefCapability = await CapabilitySchema.findOne({
      capability_copied_from: toolChainItem.ref_id,
    });

    if (newRefCapability) {
      toolChainItem.ref_id = newRefCapability._id;
    } else {
      console.log("newRefCapability is null for ref_id:", toolChainItem.ref_id);
    }
  } catch (error) {
    console.error("Error finding newRefCapability:", error);
  }
}
//above two has been replaced by  a single function.


// below code steel exists because it seems unique.
if (toolChainItem.type === "tool") {
  try {
    let newRefCapability = await CapabilitySchema.findOne({
      capability_copied_from: toolChainItem.capability_id,
    });

    if (newRefCapability) {
      toolChainItem.capability_id = newRefCapability._id;
    } else {
      console.log(
        "newRefCapability is null for capability_id:",
        toolChainItem.capability_id
      );
    }
  } catch (error) {
    console.error("Error finding newRefCapability:", error);
  }
}
