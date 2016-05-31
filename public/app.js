$(document).ready(function(){
  console.log("stuff");

$('#searchTime').hide();
$('#splash').show();

$(".start").on('click', function(){
  $('#searchTime').show();
  $('#splash').hide();
});
$(".home").on('click', function(){
  $('#searchTime').show();
  $('#splash').hide();
});

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



$(".add-movie").on('submit', function(event){
  event.preventDefault();
  console.log(getFormData());
});







});
