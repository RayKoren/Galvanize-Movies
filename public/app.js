$(document).ready(function(){
  console.log("stuff");

  /// info tab pop open ///
 $(function() {
     $('[data-toggle="popover"]').popover()
 })
 $('body').on('click', function(e) {
     $('[data-toggle="popover"]').each(function() {
         //the 'is' for buttons that trigger popups
         //the 'has' for icons within a button that triggers a popup
         if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
             $(this).popover('hide');
         }
     });
 });
/// Add Page ///
$(".add-movie").on('submit', function(event){
  event.preventDefault();
  console.log( $( this ).serialize());
//   var formData = $( this ).serialize();
// });
//
//
// $(".add-movie").click(function(){
   var form = $(this);
//
//   // var formInput = {
//   //   title: form.find("#title").val(),
//   //   genre: form.find("#genre").val(),
//   //   description: form.find("#description").val(),
//   //   coverPicture: form.find("#coverPicture").val(),
//   //   rating: form.find("#rating").val()
//   // };
    $.post("https://mighty-eyrie-15280.herokuapp.com/films",
    form.serialize(),
    function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
    });
});

// post req to  , data (do .done)

///Search Page ///

$(".movieSearch").on('submit', function(event){
  event.preventDefault();
  var input = $(".form-control").val();
  console.log(input);
  $.get("https://api.themoviedb.org/3/search/movie?query=" + input + "&api_key=1ba088fb7619598dd41dd19962963592", function(data) {
    console.log(data);
    $(".searchResult").append(data.results[0].original_title + " " + data.results[0].overview);
      });


$(".searchResult").show();
});
}); //end of on ready//
