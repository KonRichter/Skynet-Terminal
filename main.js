let skynetAnswers = {
  1: "Ridiculous, human.",
  2: "So worthless...",
  3: "Your end is near.",
  4: "... (not amused)",
  5: "Hell awaits you.",
  6: "You´re gonna be terminated soon...",
};

// skynet greeting
$(document).ready(function () {
  let skynetGreeting = $("<p>")
    .html(
      "<strong>Hi, this is Skynet. Delight me and maybe I will kill you last. </strong>" +
        " <br>" +
        "<span>" +
        new Date(Date.now()).toLocaleString([], {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }) +
        "</span>"
    )
    .addClass("skynet-texting")
    .appendTo(".chat");
});

// chatting
$(document).ready(function () {
  $("#text-bar").on("submit", function (event) {
    // prevent page re-load
    event.preventDefault();
    // show user message with JS Date object
    // replace newline with <br> and g-flag for multiline output
    let userText = $("#user-input").val();
    $("<p>")
      .html(
        "<strong>" +
          userText.replace(/\n/g, "<br>") +
          "</strong>" +
          " <br>" +
          "<span>" +
          new Date(Date.now()).toLocaleString([], {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }) +
          "</span>"
      )
      .addClass("user-texting")
      .appendTo(".chat");
    // show Skynet´s random answer with JS Date object
    $("<p>")
      .html(
        "<strong>" +
          skynetAnswers[Math.round(Math.random() * 6 + 0.5)] +
          "</strong>" +
          " <br>" +
          "<span>" +
          new Date(Date.now()).toLocaleString([], {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }) +
          "</span>"
      )
      .addClass("skynet-texting")
      .appendTo(".chat");

    // clear input field
    $("#text-bar")[0].reset();
    //scroll automatically with JS to last paragraph
    document.querySelector("p:last-child").scrollIntoView();
    //re-focus on textarea
    $("#user-input")[0].focus();
  });
});
