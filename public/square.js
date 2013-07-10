// --look for a way to ignore JQueryUI positioning for the dialog box
// --find a way to remove positioning from wrapper div (ui-dialog) with jQuery

// alert("To be, or not to be: that is the question.");
var drink_count = 0,
  total_cost = 0,
  selection = 0,
  cents_price = 0;

function generate_new_order_line(){
  $('form div:first').clone().insertAfter('form div:last');
}


$(document).ready(function(){ 



  $(".newsletter").dialog({
    autoOpen:true,
    modal:true
  });

$('.emailsubmit').click(function(event){
  event.preventDefault();
  
  data = {email: $('#email').val()};
  $.post('/signups', 
    data,
    function(){
      $('.newsletter').html("Thanks! We'll start sending you great deals for Square Cafe.");
    });
});

  $('form').on('change', 'div:last select', function(){
    // .on takes three arguments - 1) the event we are watching for (change), 2)
    // .the element we are watching for the change in (select), and 3) the
    // .function we want to use when the action is taken on the element.
    drink_count += 1;
    
    
    // $('select').each(function() {
    //   selection = $(this).find(":selected");
    //   total_cost = total_cost + Number($(selection).attr('data-price'));

    generate_new_order_line();
    //output drink count
    $('#drinks').text(drink_count);

  });

  $('form').on('change', 'select', function(){
    total_cost = 0;
    $('option:selected[data-price]').each(function(){
        total_cost += Number($(this).attr('data-price'));
        console.log(total_cost);
    });
      //output total cost
    total_cost = (total_cost/100).toFixed(2);
    $('#cost').text("$" + total_cost);
    cost_data = {cost: total_cost};
  });

  $('.button').click(function(event){
    event.preventDefault();
    $.post(
      '/shop', 
        $('.takemyorder').serialize(),
           function(responseText){
            $('#orderform').html('<div class="response"></div>');
            $('.response').html('<h2>' + responseText + '</h2>')
            .append("<p> We'll have your order out as soon as it's ready.</p><p>Your waitress will take care of your bill of $" +total_cost+ " when you're ready to leave.</p>");
    });
  });

});