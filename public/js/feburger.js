// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {


  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#box").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Just made a burger", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  // the dine and dash button deletes the DB
  $("#devour").on("click", function (event) {
    var id = $(this).data("id");
    var dev = $(this).data("devoured")
    var devObj = {
      devoured: 1
    };
    
    console.log(dev, "this is the object")
    console.log("burger devoured", id);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devObj
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});