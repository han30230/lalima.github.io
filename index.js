const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu ul');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('hide');
});

// var chatHistory = [];
// $("#chat-submit").click(function() {
//   var message = $("#chat-input").val();
//   $("#chat-output").append("<p>You: " + message + "</p>");
//   chatHistory.push("You: " + message);
//   $("#chat-input").val("");
// });
// $("#chat-history").click(function() {
//   alert(chatHistory.join("\n"));
// });
