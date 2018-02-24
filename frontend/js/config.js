$(function() {
  $(".setOptionsBtn").click(function() {
    setOptions()
  });
});

function setOptions() {
  Twitch.ext.send("broadcast", "application/json", {
    "options": getConfiguredPollOptions()
  })
}

function getConfiguredPollOptions() {
  var inputs = $("input"); // this selects ALL of the inputs
  var options = [];
  for (var i = 0; i < inputs.length; i++) {
    var optionName = inputs.eq(i).val()
    options.push(optionName);
  }
  return options;
}
