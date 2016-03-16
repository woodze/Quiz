$(document).ready(function(){
  $('li').on('click', function(){ 
      $('.replacer').text($(this).text())
  });
    
});

$(document).ready(function(){
    $("h1").text('Denver Bronco Quiz');
                

    $('li').click(function(){
        $(this).toggleClass('SuperBowl');
    });
                
});
