$(".pictures > div:gt(0)").hide();

setInterval(function() { 
  $('.pictures > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.pictures');
},  3000);