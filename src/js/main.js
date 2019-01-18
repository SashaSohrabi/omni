$(".contact-form").validate({
  rules: {
    email: {
      required: true,
      email: true
    }
  }, //end rules
  messages: {
    email: {
      required: "Please supply an e-mail address.",
      email: "This is not a valid email address."
    }
  }
}); // end validate
