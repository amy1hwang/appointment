$(document).ready(function() {
  $("form").submit(function(event) {

      var nameInput = $("input#name").val();
      var dateInput = $("input#date").val();
      var StartInput= $("input#Start").val();
      var EndInput = $("input#End").val();
      $("li.name").text(nameInput);
      $("li.date").text(dateInput);
      $("li.Start").text(StartInput);
      $("li.End").text(EndInput);

      event.preventDefault();
    });
});
