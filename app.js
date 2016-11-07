$(document).ready(function() {

  $('.color-button').on('click', function(){
    var chosenColor = $(this).attr("data-color");
    addColorBlock(chosenColor);
    updateTally(chosenColor);
  });

  //insert appropriate color block after last element within .container div
  function addColorBlock(color) {
    var $el = $('.container');
    $el.append('<div class="color-cube ' + color + '"></div>');
  }

  function updateTally(color){
    var $el = $('#' + color);
    //extract number from text within <p> tag
    var count = $el.text().replace(/\D/g,'');
    count++;
    //reprint text with incremented number
    $el.text('Total ' + color + ': ' + count);
  }

});
