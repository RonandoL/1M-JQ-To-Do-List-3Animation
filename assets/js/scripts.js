$(document).ready(function() {
// 7b. recall localStorage on refresh, place on page
    $("#list-items").html(localStorage.getItem("listItems"));

// ADD INPUT TO PAGE
  // 1a. grab form's submit event handler
    $(".add-items").submit(function(event) {
  // 1. grab input: confirm w/console.log, use variable to grab input value
        event.preventDefault();
        var item = $("#todo-list-item").val();
  // 4. stop blank <li> entries using (IF/else)
        if (item) {  // if there is text inputted, then put input on page, (implicit: else don't)

// INPUT
  // 9. Easter Egg: car, Car, cat, Cat, dog, Dog, kim, Kim results in image displayed
            if ((item === "car") || (item === "Car")) {
                  $("#list-items").append("<li><input class='checkbox' type='checkbox'>" + item + "&nbsp; &nbsp;" + "<img src='assets/images/camaro.jpg'>" + "<a class='remove'>x</a><hr></li>");
            } else if ((item === "dog") || (item === "Dog")) {
                  $("#list-items").append("<li><input class='checkbox' type='checkbox'>" + item + "&nbsp; &nbsp;" + "<img src='assets/images/dog.png'>" + "<a class='remove'>x</a><hr></li>");
            } else if ((item === "cat") || (item === "Cat")) {
                  $("#list-items").append("<li><input class='checkbox' type='checkbox'>" + item + "&nbsp; &nbsp;" + "<img src='assets/images/cat.jpg'>" + "<a class='remove'>x</a><hr></li>");
            } else if ((item === "kim") || (item === "Kim")) {
                  $("#list-items").append("<li><input class='checkbox' type='checkbox'>" + item + "&nbsp; &nbsp;" + "<img src='assets/images/kim.jpg'>" + "<a class='remove'>x</a><hr></li>");
            } else {
  // 2. put input up on page w/checkbox, x & <hr>
                  $("#list-items").append("<li><input class='checkbox' type='checkbox'>" + item + "<a class='remove'>x</a><hr></li>");
            }
  // 7a. save to localStorage: .setItem("key", $("value")
            localStorage.setItem("listItems", $("#list-items").html());
  // 3. clear value out of input field
            $("#todo-list-item").val("");
        }
    });

// CHECKBOX TWEAKS
  // 5. make chackbox strikethrough text: .on("event", "selector", function() {
    $(document).on("change", ".checkbox", function() {  // Remember, we're working with dynamic element here!
  // 8. keep checkbox checked/unchecked on refresh: if/else, "checked" is an attribute
        if ($(this).attr("checked")) {  // IF attribute "checked" is present??
            $(this).removeAttr("checked");  // then remove the attribute from input
        } else {
          $(this).attr("checked", "checked");  // otherwise check the checked attrib.
        }
        $(this).parent().toggleClass("completed"); // each time clicked, it swaps completed
  // 7d. save checkbox action to localStorage
        localStorage.setItem("listItems", $("#list-items").html());
    });

// DELETE LINE ITEM TWEAKS
  // 6. make x remove <li> item: .on("event", "selector", function() {
    $(document).on("click", ".remove", function() {
        $(this).parent().slideUp( 900, function() {  // animation slideUp really sloww
            $(this).remove();
  // 7c. save to localStorage: .setItem("key", $("value")
            localStorage.setItem("listItems", $("#list-items").html());
        });
    });
});











//
