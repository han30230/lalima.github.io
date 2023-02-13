$("#chat-submit").click(function() {
  var message = $("#chat-input").val();
  $("#chat-output").append("<p>" + message + "</p>");
  $("#chat-input").val("");
});
