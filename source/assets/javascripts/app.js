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


  // set parent menu item as active from sub-pages
  url = window.location.pathname;
  pathRegex = '/([^\/]+[^\/])/';
  result = url.match(pathRegex);

  if (result) {
    parentName = result[1];
    menuItem = $('#nav_' + parentName);
    menuItem.addClass("active");
  }


$('#icon-natverk').click(function(e){
  e.preventDefault;
  $("html, body").animate({ scrollTop: 748 }, "slow");
})

$('#icon-hosting').click(function(e){
  e.preventDefault;
  $("html, body").animate({ scrollTop: 1456 }, "slow");
})


//   // menu scroll
//   var x = 0;
$(".right-off-canvas-toggle").click(function(e){
  $(window).scrollTop(0);
});
//     x += 1;



//     var top = $(window).scrollTop();

//       if (x%2 === 1) {
//         $(".tab-bar").css({'top': top + "px"});
//       } else {
//         return false;
//       }

//     });
});

$(window).scroll(function () {
  var st = $(window).scrollTop();
  caption.css({'padding-top':+(st*0.7)+"px", 'margin-bottom': -(st*0.7)+"px"});
  console.log(st);


  caption.css({'opacity': 1/(st*0.06)});

  if (st > 380) {
    caption.css({'display': 'none'});
  } else {
    caption.css({'display': 'block'});
  }

});
