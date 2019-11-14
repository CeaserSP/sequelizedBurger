$(function() {
    $("#submit").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#brg").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".buttonEat").on("click",  function(event) {
        var id = $(this).attr("id");
        var changeState = $(this).attr("changeState");
        changeState = 1;
        var stateChanged = {
          devoured: changeState
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: stateChanged
        }).then(
          function() {
            console.log("changed state to", changeState);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});