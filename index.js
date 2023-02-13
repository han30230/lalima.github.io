var chatHistory = [];
$("#chat-submit").click(function() {
  var message = $("#chat-input").val();
  $("#chat-output").append("<p>You: " + message + "</p>");
  chatHistory.push("You: " + message);
  $("#chat-input").val("");
});
$("#chat-history").click(function() {
  alert(chatHistory.join("\n"));
});
