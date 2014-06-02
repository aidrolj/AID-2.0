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

  initMap();

});

$(window).scroll(function () {
  var st = $(window).scrollTop();
  caption.css({'padding-top':+(st*0.7)+"px", 'margin-bottom': -(st*0.7)+"px"});
  //console.log(st);


  caption.css({'opacity': 1/(st*0.06)});

  if (st > 380) {
    caption.css({'display': 'none'});
  } else {
    caption.css({'display': 'block'});
  }

});


// Modest Maps

var initMap = function() {
  var map, layer;
  var tiles = new MM.StamenTileLayer("toner");
  //var tiles = new MM.TemplatedLayer("http://tile.openstreetmap.org/{Z}/{X}/{Y}.png");
  var zoomIn = $("#zoomIn");
  var zoomOut = $("#zoomOut");
  var zoomHome = $("#zoomHome");


  map = new MM.Map("map", tiles);

  layer = new SpotlightLayer();
  layer.spotlight.radius = 40;

  map.addLayer(layer);
  map.setCenterZoom(new MM.Location(57.4939, 12.0802), 16);
  var location = new MM.Location(57.4943, 12.0767);

  layer.addLocation(location);

  zoomIn.click(function() {
    map.zoomIn();
  });

  zoomOut.click(function() {
    map.zoomOut();
  });

  zoomHome.click(function() {
    map.setCenterZoom(new MM.Location(57.4939, 12.0802), 16);
  });

}
