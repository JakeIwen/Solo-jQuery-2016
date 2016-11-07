$(document).ready(function() {

  $('.color-button').on('click', function(){
    console.log($(this).attr("data-color"));
    var chosenColor = $(this).attr("data-color");
    addColorBlock(chosenColor);
    

  });

  function addColorBlock(color) {
    var $el = $('.container');
    $el.append('<div class="color-cube ' + color + '"></div>');
  }

  function updateTally(color){


    $('.' + color).text('Total ' + color + ': ' + );
  }
});
