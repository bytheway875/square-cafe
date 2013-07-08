// alert("To be, or not to be: that is the question.");
var drink_count = 0,
  total_cost = 0,
  selection = 0,
  cents_price = 0;

$(document).ready(function(){ 


  $('form').on('change', 'select', function(){
    // .on takes three arguments - 1) the event we are watching for (change), 2)
    // .the element we are watching for the change in (select), and 3) the
    // .function we want to use when the action is taken on the element.
    drink_count += 1;
    total_cost = 0;
    $('select').each(function() {

      selection = $(this).find(":selected");
      total_cost = total_cost + Number($(selection).attr('data-price'));



      console.log('Selection:' + $(selection).attr('data-price'));
      console.log('Total_Cost:' + total_cost);
      console.log(' ');
    });

    $('form').append('<select>' + $('select').first().html() + '</select><br/>');
    $('#drinks').text(drink_count);
    console.log(total_cost);
    $('#cost').text(total_cost);
  });
});