// Declare chatWindowVisible globally
let chatWindowVisible = false;

// Define MyObject constructor
function MyObject(id, key) {
  this.id = id;
  this.key = key;
  this.initProperty = null;
}

// Add init method to MyObject prototype
MyObject.prototype.init = function (value) {
  this.initProperty = value;
};

// Function to load style dynamically
function loadStyle(url) {
  // Create a link element
  const link = document.createElement("link");
  // Set the type of the link to CSS
  link.type = "text/css";
  // Set the relationship of the link to stylesheet
  link.rel = "stylesheet";
  // Set the URL of the stylesheet
  link.href = url;
  // Append the link element to the head of the document
  document.getElementsByTagName("head")[0].appendChild(link);
}

// Function to load script dynamically
function loadScript(url, callback) {
  // Create a script element
  const script = document.createElement("script");
  // Set the type of the script to JavaScript
  script.type = "text/javascript";
  // Set the onload event handler to the provided callback function
  script.onload = callback;
  // Set the source URL of the script
  script.src = url;
  // Append the script element to the head of the document
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Function to load iframe
function loadIframe(url) {
  // Create an iframe element
  const iframe = document.createElement("iframe");
  // Set the source URL of the iframe
  iframe.src = url;
  // Append the iframe element to the body of the document
  document.body.appendChild(iframe);
}

// Create an instance of MyObject
const myObj = new MyObject(1, "myKey");
// Initialize the initProperty of myObj to "Initial Value"
myObj.init("Initial Value");

// Append content to the body of iframe with specific ID and key, then load URL
window.onload = function () {
  // ID of the iframe
  const iframeId = "myIframe";
  // Key of the iframe
  const iframeKey = "myKey";

  // Check if ID and key match the properties of myObj
  if (iframeId === myObj.id && iframeKey === myObj.key) {
    // Append content to the body of the iframe
    const iframeBody =
      document.getElementById(iframeId).contentWindow.document.body;
    // Set the inner HTML content of the iframe's body to include the initProperty of myObj
    iframeBody.innerHTML = "<div>" + myObj.initProperty + "</div>";

    // Load the URL into the iframe
    const url = "https://dev.kogo.ai/chatbot"; // Replace with your URL
    loadIframe(url);
  } else {
    // Log a message if ID and key do not match
    console.log("ID and key do not match");
  }
};

// Function to load chat window
function loadChatWindow() {
  // Check if jQuery is not defined
  if (typeof $.fn.popover === "undefined") {
    // Load Bootstrap CSS if jQuery is not defined
    loadStyle(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    );
  }

  // Append chat window HTML to the body of the document
  $("body").append(
    `<div class="chatbot-toggler" id="toggleChatWindow"><img src="https://chatbot.kogotrips.com/assets/img/favicon.jpg"/></div><div class="chatbot" id="chatbox"><div class="chatbody"><iframe border="0" id="myFrame" src="https://dev.kogo.ai/chatbot" class="chatbotiframe"></iframe></div><div id="toggleChatWindow2" class="CloseIcons"></div></div>`
  );

  // Add event handlers for toggling the chat window visibility
  $("#toggleChatWindow, #toggleChatWindow2").on("click", function () {
    // Toggle the visibility of the chat window
    $("#chatbox").toggleClass("show");
    // Update the global variable to reflect the visibility state of the chat window
    chatWindowVisible = !chatWindowVisible;
  });
}

// Check document readiness and load chat window
document.onreadystatechange = function () {
  // Check if the document's state is complete
  if (document.readyState === "complete") {
    // Check if jQuery is not defined
    if (!window.jQuery) {
      // Load jQuery dynamically if not defined, then load the chat window
      loadScript(
        "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        loadChatWindow
      );
    } else {
      // Load the chat window if jQuery is already defined
      loadChatWindow();
    }
  }
};

{
  `var webengage;!function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),
arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="webPersonalization feedback survey notification notificationInbox".split(z),c="options render clear abort".split(z),p="Prepare Render Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r._v){for(w[b]=r={queue:[],_v:"6.0",user:{}},i=0;i < l.length;i++)o(r,[l[i]]);for(i=0;i < a.length;i++){for(r[a[i]]={},s=0;s < c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s < p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i < u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");webengage.init("14507d247");`;
}
