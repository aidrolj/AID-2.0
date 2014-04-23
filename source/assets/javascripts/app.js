$(document).foundation();

var top_header = '';
var caption = '';
var url,
    pathRegex,
    result,
    parentName;


$(document).ready(function(){
  top_header = $('.curtain');
  caption = $('#slide-away');
  console.log(caption);

  $('#down-arrow').click(function(e) {
    e.preventDefault();

    $("html, body").animate({scrollTop: 400}, 600);
  });


  // fixes link active on sub-pages
  url = window.location.pathname;
  pathRegex = '/([^\/]+[^\/])/';
  result = url.match(pathRegex);

  console.log(result);

  if (result) {
    parentName = result[1];

    menuItem = $('#nav_' + parentName);
    console.log(menuItem);
    menuItem.addClass("active");
  }

});

$(window).scroll(function () {
  var st = $(window).scrollTop();
  caption.css({'padding-top':+(st*0.7)+"px", 'margin-bottom': -(st*0.7)+"px"});
  console.log(st);

  $(".right-off-canvas-menu").css({'top': st + "px"});

  caption.css({'opacity': 1/(st*0.06)});

  if (st > 380) {
    caption.css({'display': 'none'});
  } else {
    caption.css({'display': 'block'});
  }

});
