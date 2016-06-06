$(function(){
  $('#end').hide();
  $('p').hide();
  $('#begin').on('click', function(){
    $('p').show()
    $('#begin').hide();
    $('#end').show();
    var h = $(window).height();
    var w = $(window).width();
    var i = 0;
    var score = 0
    var Interval = setInterval(function(){
      if(Math.random() < 0.5) {
        $('body').append('<img src="cat.png" id="cat-' + i + '" class="cat">');
        $('body').append('<img src="bomb.png" id="bomb-' + i + '" class="bomb">');
        $('#cat-' + i).css('left', w * Math.random());
        $('#cat-' + i).animate({top: h}, Math.floor(Math.random() * 4000 + 1000),
            function(){
              $(this).remove();
            }
          );
        $('#bomb-' + i).css('left', w * Math.random());
        $('#bomb-' + i).animate({top: h}, Math.floor(Math.random() * 4000 + 1000),
            function(){
              $(this).remove();
            }
          );
        i++;
        }

        $('#end').on('click', function(){
          clearInterval(Interval);
          $('#begin').show();
          $('#end').hide();
          $('p').hide();
          score = 0;
        });
      },  500);

      $('body').on('click', '.cat', function(){
        $(this).remove();
        score += 10;
        console.log(score);
        $('#p_score').text(score);
      });

      $('body').on('click', '.bomb', function(){
        $(this).remove();
        score -= 5;
        console.log(score);
        $('#p_score').text(score);
      });
    });
});
