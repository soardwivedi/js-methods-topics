// Define a variable named 'webengage' and an immediately invoked function expression (IIFE)
var webengage;

!(function (w, e, b, n, g) {
  // Define a function named 'o' which sets properties on an object
  function o(e, t) {
    e[t[t.length - 1]] = function () {
      // Pushes an array to the '__queue' property of the object 'r'
      r.__queue.push([t.join("."), arguments]);
    };
  }

  // Define variables for use within the function
  var i,
    s,
    r = w[b],
    z = " ",
    // Split the following strings into arrays based on spaces
    l = "init options track screen onReady".split(z),
    a =
      "webPersonalization feedback survey notification notificationInbox".split(
        z
      ),
    c = "options render clear abort".split(z),
    p = "Prepare Render Open Close Submit Complete View Click".split(z),
    u = "identify login logout setAttribute".split(z);

  // If 'r' is falsy or does not have the '_v' property
  if (!r || !r._v) {
    // Initialize 'r' with necessary properties if it's not already initialized
    for (
      w[b] = r = { queue: [], _v: "6.0", user: {} }, i = 0;
      i < l.length;
      i++
    )
      o(r, [l[i]]);

    // Iterate over 'a' array
    for (i = 0; i < a.length; i++) {
      // Create an empty object for each element in 'a'
      for (r[a[i]] = {}, s = 0; s < c.length; s++) o(r[a[i]], [a[i], c[s]]);
      // Create functions with 'on' prefix for each element in 'p'
      for (s = 0; s < p.length; s++) o(r[a[i]], [a[i], "on" + p[s]]);
    }

    // Create functions for 'user' object
    for (i = 0; i < u.length; i++) o(r.user, ["user", u[i]]);

    // Load WebEngage script asynchronously after a timeout
    setTimeout(function () {
      var f = e.createElement("script"),
        d = e.getElementById("_webengage_script_tag");
      (f.type = "text/javascript"),
        (f.async = !0),
        // Load the script based on the protocol used
        (f.src =
          ("https:" == e.location.protocol
            ? "https://ssl.widgets.webengage.com"
            : "http://cdn.widgets.webengage.com") +
          "/js/webengage-min-v-6.0.js"),
        // Insert the script before the first script element
        d.parentNode.insertBefore(f, d);
    });
  }
})(window, document, "webengage");

// Initialize WebEngage with the provided ID
webengage.init("14507d247");
