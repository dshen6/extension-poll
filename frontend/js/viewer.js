$(function() {
  var options = ["dope", "cool", "rad"]
  for (var i = 0; i < options.length; i++) {
      makeOptionButton(options[i]);
  }
  setupListener()
});

function makeOptionButton(optionName) {
  var optionButton = $("<button>").text(optionName);
  optionButton.click(function() {
    voteForOption(optionName);
  })
  $("body").append(optionButton);
}

function voteForOption(optionName) {
  Twitch.ext.send("broadcast", "application/json", {
    "option": "voted for " + optionName
  })
}

function setupListener() {
  Twitch.ext.listen("broadcast", (target, contentType, message) => console.log(message));
}
