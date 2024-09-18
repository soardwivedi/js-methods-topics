// first collection::: 
// deploymentsolutions
// {
//   "_id": {
//     "$oid": "6647502d45a1a13ab8215f93"
//   },
//   "deployment_solution": "widget"
// }

// {
//   "_id": {
//     "$oid": "664750d945a1a13ab8215f95"
//   },
//   "deployment_solution": "voice"
// }

// {
//   "_id": {
//     "$oid": "6647510145a1a13ab8215f96"
//   },
//   "deployment_solution": "api"
// }

// {
//   "_id": {
//     "$oid": "6647511045a1a13ab8215f97"
//   },
//   "deployment_solution": "webview"
// }

// second collection:: 
// plateforms
// {
//   "_id": {
//     "$oid": "6647512445a1a13ab8215f9a"
//   },
//   "plateform_name": "android",
//   "deployment_solution_id": "6647511045a1a13ab8215f97"
// }
// {
//   "_id": {
//     "$oid": "6647519f45a1a13ab8215f9d"
//   },
//   "plateform_name": "ios",
//   "deployment_solution_id": "6647511045a1a13ab8215f97"
// }
// {
//   "_id": {
//     "$oid": "664751a845a1a13ab8215f9e"
//   },
//   "plateform_name": "hybrid",
//   "deployment_solution_id": "6647511045a1a13ab8215f97"
// }

// 3rd collection::: code
// {
//   "_id": {
//     "$oid": "664752cb45a1a13ab8215fa4"
//   },
//   "deployment_solution_id": "6647511045a1a13ab8215f97",
//   "plateform_id": "6647512445a1a13ab8215f9a",
//   "code": "code for android webview"
// }
// {
//   "_id": {
//     "$oid": "664752e445a1a13ab8215fa5"
//   },
//   "deployment_solution_id": "6647511045a1a13ab8215f97",
//   "plateform_id": "6647519f45a1a13ab8215f9d",
//   "code": "code for ios webview"
// }
// {
//   "_id": {
//     "$oid": "664752f645a1a13ab8215fa6"
//   },
//   "deployment_solution_id": "6647511045a1a13ab8215f97",
//   "plateform_id": "664751a845a1a13ab8215f9e",
//   "code": "code for hybrid webview"
// }
// {
//   "_id": {
//     "$oid": "664753c545a1a13ab8215fa9"
//   },
//   "deployment_solution_id": "6647510145a1a13ab8215f96",
//   "plateform_id": null,
//   "code": "code for api"
// }
// {
//   "_id": {
//     "$oid": "6647541c45a1a13ab8215faa"
//   },
//   "deployment_solution_id": "664750d945a1a13ab8215f95",
//   "plateform_id": null,
//   "code": "code for voice"
// }
// {
//   "_id": {
//     "$oid": "6647544b45a1a13ab8215fab"
//   },
//   "deployment_solution_id": "6647502d45a1a13ab8215f93",
//   "plateform_id": null,
//   "code": "code for widget"
// }


// and schemas for above three collection are as below respectively
// 1st collection schema 
// import mongoose from "mongoose";

// const { Schema } = mongoose;

// // Define subPlateform schema

// // Define deploymentsolution schema
// const DeploymentSolutionSchema = new Schema({
//   deployment_solution: { type: String, required: false },
// });

// // Create and export the model
// const deploymentsolution = mongoose.model("deploymentsolution", DeploymentSolutionSchema);

// export default deploymentsolution;


// 2nd collection schema 
// import mongoose from "mongoose";

// const { Schema } = mongoose;

// // Define subPlateform schema

// // Define plateform schema
// const PlateformSchema = new Schema({
//   plateform_name: { type: String, required: false },
//   deployment_solution_id: { type: Schema.Types.ObjectId, ref: "deploymentsolution", required: false },
// });

// // Create and export the model
// const plateforms = mongoose.model("plateform", PlateformSchema);

// export default plateforms;

// 3rd collection schema
// import mongoose from "mongoose";

// const { Schema } = mongoose;

// // Define codeSolution schema
// const CodeSchema = new Schema({
//   deployment_solution_id: {
//     type: Schema.Types.ObjectId,
//     ref: "deploymentsolution",
//     required: false,
//   }, 
//    plateform_id: {
//     type: Schema.Types.ObjectId,
//     ref: "plateform",
//     required: false,
//   },
//   code: { type: String, required: false },
// });

// // Create and export the model
// const codeSolution = mongoose.model("codes", CodeSchema);

// export default codeSolution;