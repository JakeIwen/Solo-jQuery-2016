$(document).ready(function() {

  $('.color-button').on('click', function(){
    var chosenColor = $(this).attr("data-color");
    addColorBlock(chosenColor);
    updateTally(chosenColor);
  });

  function addColorBlock(color) {
    var $el = $('.container');
    $el.append('<div class="color-cube ' + color + '"></div>');
  }

  function updateTally(color){
    var $el = $('#' + color)
    var count = $el.text().replace(/\D/g,'');
    count++;
    $el.text('Total ' + color + ': ' + count);
  }
});
