"use strict";

/* Form validation */
$(".contact-form").validate({
  rules: {
    email: {
      required: true,
      email: true
    }
  },
  //end rules
  messages: {
    email: {
      required: "Please supply an e-mail address.",
      email: "This is not a valid email address."
    }
  }
}); // end validate

/* Sticky navigation */
var waypoint = new Waypoint({
  element: document.getElementById("features"),
  handler: function(direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  },
  offset: 60
});
