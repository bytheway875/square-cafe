// alert("To be, or not to be: that is the question.");
var drink_count = 0,
  total_cost = 0,
  selection = 0,
  cents_price = 0;

function generate_new_order_line(){
  $('form div:first').clone().insertAfter('form div:last');
}

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
      
    });

    generate_new_order_line();
    //output drink count
    $('#drinks').text(drink_count);
    //output total cost
    total_cost = (total_cost/100).toFixed(2);
    $('#cost').text("$" + total_cost);
    cost_data = {cost: total_cost};

    
    
  
  });
    

    $('.button').click(function(event){
      event.preventDefault();
      console.log($('form').serialize());
      $.post('/shop', cost_data, function(responseText){
        $('#orderform').html('<div class="response"></div>');
        $('.response').html('<h2>' + responseText + '</h2>')
        .append("<p> We'll have your order out as soon as it's ready.</p><p>Your waitress will take care of your bill of $" +total_cost+ " when you're ready to leave.</p>");
      });


    });
});