const string = `00:00:00  Introduction
  00:00:25  Prerequisites
  00:03:10  What is NextJS & Why use NextJS
  00:06:25  Official Doc
  00:07:35  Create NextJS Project with src
  00:09:55  Run Project and Edit Default Template
  00:11:02  Directory Structure
  00:16:44  Create NextJS Project without src
  00:17:23  Run Project and Edit Default Template
  00:18:04  Directory Structure
  00:23:03  Route
  00:26:05  Nested Route
  00:28:00  Route Group
  00:29:54  Dynamic Route
  00:32:43  URL Params
  00:34:40  Catch All Route
  00:38:11  Catch All Route Optional
  00:39:11  Parallel Routes or Conditional Route Render
  00:44:49  Layout
  00:48:56  Link
  00:52:48  useRouter() Hook
  00:56:35  Server Component and Client Component
  01:02:15  Using Global CSS and Tailwind CSS
  01:04:00  Using CSS Module
  01:06:00  Using Images
  01:10:45  Data Fetching
  01:16:17  Creating API or API Routes
  01:20:04  API Test using Postman
  01:20:53  request object
  01:22:12  Request Header
  01:23:10  URL Query Params
  01:25:16  Request Cookies
  01:26:40  POST Request
  01:31:48  Set Response Status Code
  01:32:35  Dynamic API Route
  01:34:47  Params
  01:37:22  Make Third Party API Request from Server
  01:46:41  MongoDB Database Integration
  01:50:22  Make Connection to MongoDB
  01:51:00  Using ENV
  01:51:36  Install mongoose
  01:53:57  Create GET Request and Check DB Connection
  01:55:45  Create Model and Schema
  01:57:55  Retrieve Data from MongoDB
  02:00:15  Show Retrieved Data in Web Page
  02:02:30  Create Form to Insert Data
  02:05:40  Post Request to Insert Data
  02:07:36  Test Post Request using Postman
  02:08:53  Post Data using Form
  02:10:20  Server Action
  02:18:00  Change Title - Metadata
  02:19:34  Middleware
  02:22:50  Loading UI
  02:24:24  Error UI
  02:24:45  Not Found UI`;

const newString = string.split("  ");

// console.log("newString is", newString);

const string1 = [
  "00:00:00",
  "Introduction\n",
  "00:00:25",
  "Prerequisites\n",
  "00:03:10",
  "What is NextJS & Why use NextJS\n",
  "00:06:25",
  "Official Doc\n",
  "00:07:35",
  "Create NextJS Project with src\n",
  "00:09:55",
  "Run Project and Edit Default Template\n",
  "00:11:02",
  "Directory Structure\n",
  "00:16:44",
  "Create NextJS Project without src\n",
  "00:17:23",
  "Run Project and Edit Default Template\n",
  "00:18:04",
  "Directory Structure\n",
  "00:23:03",
  "Route\n",
  "00:26:05",
  "Nested Route\n",
  "00:28:00",
  "Route Group\n",
  "00:29:54",
  "Dynamic Route\n",
  "00:32:43",
  "URL Params\n",
  "00:34:40",
  "Catch All Route\n",
  "00:38:11",
  "Catch All Route Optional\n",
  "00:39:11",
  "Parallel Routes or Conditional Route Render\n",
  "00:44:49",
  "Layout\n",
  "00:48:56",
  "Link\n",
  "00:52:48",
  "useRouter() Hook\n",
  "00:56:35",
  "Server Component and Client Component\n",
  "01:02:15",
  "Using Global CSS and Tailwind CSS\n",
  "01:04:00",
  "Using CSS Module\n",
  "01:06:00",
  "Using Images\n",
  "01:10:45",
  "Data Fetching\n",
  "01:16:17",
  "Creating API or API Routes\n",
  "01:20:04",
  "API Test using Postman\n",
  "01:20:53",
  "request object\n",
  "01:22:12",
  "Request Header\n",
  "01:23:10",
  "URL Query Params\n",
  "01:25:16",
  "Request Cookies\n",
  "01:26:40",
  "POST Request\n",
  "01:31:48",
  "Set Response Status Code\n",
  "01:32:35",
  "Dynamic API Route\n",
  "01:34:47",
  "Params\n",
  "01:37:22",
  "Make Third Party API Request from Server\n",
  "01:46:41",
  "MongoDB Database Integration\n",
  "01:50:22",
  "Make Connection to MongoDB\n",
  "01:51:00",
  "Using ENV\n",
  "01:51:36",
  "Install mongoose\n",
  "01:53:57",
  "Create GET Request and Check DB Connection\n",
  "01:55:45",
  "Create Model and Schema\n",
  "01:57:55",
  "Retrieve Data from MongoDB\n",
  "02:00:15",
  "Show Retrieved Data in Web Page\n",
  "02:02:30",
  "Create Form to Insert Data\n",
  "02:05:40",
  "Post Request to Insert Data\n",
  "02:07:36",
  "Test Post Request using Postman\n",
  "02:08:53",
  "Post Data using Form\n",
  "02:10:20",
  "Server Action\n",
  "02:18:00",
  "Change Title - Metadata\n",
  "02:19:34",
  "Middleware\n",
  "02:22:50",
  "Loading UI\n",
  "02:24:24",
  "Error UI\n",
  "02:24:45",
  "Not Found UI",
];

// const string2 = `  02:18:00  Change Title - Metadata
//   02:19:34  Middleware
//   02:22:50  Loading UI
//   02:24:24  Error UI
//   02:24:45  Not Found UI`;

//   console.log(string2.split("  "));

const arrayOfStr = [];
const string3 = string1.map((item, index) => {
    console.log(item);
  if (item.slice(-2) == "\n") {
    console.log("item is", item)
    const result = item.trim().substring(0, item.length - 1);
    console.log("result is", result)
    arrayOfStr.push(result);

    //         let result = str.trim().substring(0, str.length - 1);
    // // Or using slice()
    // // let result = str.trim().slice(0, -1);
    console.log("arrayOfStr is", arrayOfStr);
    // console.log(result); // Output: Introduction
  }
});

console.log("arrayOfStr is", string3);