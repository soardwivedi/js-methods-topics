import { NextApiRequest, NextApiResponse } from 'next';

// export default function hendler(req, res) {
//   // Handle different HTTP methods (optional)
//   if (req.method === 'GET') {
//     // Respond with a JSON object
//     res.status(200).json({ message: 'Hello from Next.js API!' });
//   } else {
//     // Handle other methods (optional)
//     res.status(405).end(); // Method Not Allowed
//   }
// }

export async function GET(request, response) {
    const user = "hello"
    let url = new URL(request.url);
    console.log("url is :::::::::::::::::::::::::::", url)
    const searchParams = url.searchParams;
    console.log("searchParams is :::::::::::::::::::", searchParams)
    const queryParamValue = searchParams.get("apikey");
    console.log("queryParamValue is :::::::::::::::::", queryParamValue)
    let data;

    // Process data based on the query parameter (if present)
    if (queryParamValue) {
      // Handle the case where the query parameter exists
      data = `Received query parameter: ${queryParamValue}`;
    } else {
      // Handle the case where the query parameter is absent
      data = "key is true.";
    }
    const dataToReturn = `key is true. ${queryParamValue}`;
    return new Response(JSON.stringify(dataToReturn))
    // response.response({status: true})
}
// export default async function GET(req, res) {
//   // Access query string parameters using req.url
//   const url = new URL(req.url);
//   const searchParams = url.searchParams;

//   // Extract the desired query parameter value (replace 'yourQueryParam' with the actual name)
//   const queryParamValue = searchParams.get(apiKey);

//   let data;

//   // Process data based on the query parameter (if present)
//   if (queryParamValue) {
//     // Handle the case where the query parameter exists
//     data = `Received query parameter: ${queryParamValue}`;
//   } else {
//     // Handle the case where the query parameter is absent
//     data = "key is true.";
//   }

//   // Send the response as JSON
//   return new Response(JSON.stringify(data));
//   // res.status(200).json(data);
// }

// import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req, res) {
//   // Set CORS headers
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With, Content-Type, Accept, Origin"
//   );

//   // Handle different HTTP methods (optional)
//   if (req.method === "GET") {
//     // Respond with a JSON object
//     res.status(200).json({ message: "Hello from Next.js API!" });
//   } else {
//     // Handle other methods (optional)
//     res.status(405).end(); // Method Not Allowed
//   }
// }
