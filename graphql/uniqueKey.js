const data = {
  _id: "65f0023fdb5ddea5624a1132",
  agent_id: "65d31d08da03aaceec35a47b",
  tool_id: "65eed33dffd8fc87c85327d3",
  capability_name: "Tavelly",
  auth_type: "",
  auth_url: "",
  auth_method: "",
  api_key: "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",
  client_id: "",
  client_secret: "",
  is_configured: 0,
  is_deleted: 0,
  __v: 0,
};
const newData =  addUniqueKeyWhereNot(data);
console.log("newData", newData);
  function addUniqueKeyWhereNot(data) {
  if (data) {
    console.log("data", data);
    const uniqueKey = generateUniqueAlphanumeric();
    if ("unique_key" in data && (!data.unique_key || data.unique_key !== "")) {
      data.unique_key = uniqueKey;
    //   const data = addUpdateCapabity(data);
      return data;
    } else {
      data.unique_key = uniqueKey;
      return data;
    }
  }
}
 function generateUniqueAlphanumeric() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).slice(2);
    return timestamp + randomPart;
  }
//   mongodb://localhost:27017

// console.log(require('crypto').randomBytes(64).toString('hex'))