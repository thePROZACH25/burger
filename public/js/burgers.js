$(function () {
  $("#submitBtn").on("click", function (event) {
    event.preventDefault();

    var newBurger = { burger_name: $("#newburger").val().trim(), devoured: 0 };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Added a new Burger!!");
      location.reload();
    });
  });

  $(".eatBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id)
    var devouredState = {
      devoured: 1,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("Devoured Burger!!");
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
