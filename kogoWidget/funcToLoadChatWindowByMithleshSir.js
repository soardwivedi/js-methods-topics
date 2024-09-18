// Function to load chat window
function loadChatWindow() {
  if (typeof $.fn.popover === "undefined") {
    loadStyle(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    );
  }

  fetchData()
    .then((result) => {
      const tokenEncry = encodeURIComponent(result?.token);
      // Load js-cookie library dynamically and execute callback
      loadCookiesLibrary(() => {
        cookiesCallback(result?.token);
      });
      if (result?.status == "OK" && tokenEncry && tokenEncry !== "") {
        $("body").append(
          `<div class="chatbot-toggler" id="toggleChatWindow"><img src="https://chatbot.kogotrips.com/assets/img/favicon.jpg"/></div><div class="chatbot" id="chatbox"><div class="chatbody"><iframe border="0" id="myFrame" src="http://localhost:3000/chatbot?key=${keyValue}&token=${tokenEncry}" class="chatbotiframe"></iframe></div><div id="toggleChatWindow2" class="CloseIcons"></div></div>`
        );

        // Add event handlers for toggling chat window
        $("#toggleChatWindow, #toggleChatWindow2").on("click", function () {
          console.log("Clicked on the chat icon");
          $("#chatbox").toggleClass("show");
          chatWindowVisible = !chatWindowVisible;
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  // Append chat window to the body
}