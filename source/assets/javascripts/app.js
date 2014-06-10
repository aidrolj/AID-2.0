$(document).foundation();

  var top_header = '';
  var caption = '';
  var url,
    pathRegex,
    result,
    parentName,
    topPosition;

$(document).ready(function(){

  top_header = $('.curtain');
  caption = $('#slide-away');

  // scroll animation for splash/curtain on index page
  $('#down-arrow').click(function(e) {
    e.preventDefault();

    $("html, body").animate({scrollTop: 400}, 600);
  });


  // show parent menu item as active also from sub-pages
  url = window.location.pathname;
  pathRegex = '/([^\/]+[^\/])/';
  result = url.match(pathRegex);

  if (result) {
    parentName = result[1];
    menuItem = $('#nav_' + parentName);
    menuItem.addClass("active");
  }

  // scroll to sections
  $('#icon-infrastruktur').click(function(e){
    e.preventDefault();
    topPosition = $("#infrastruktur").position().top - 80;
    $("html, body").animate({ scrollTop: topPosition }, "slow");
  });

  $('#icon-hosting').click(function(e){
    e.preventDefault();
    topPosition = $("#hosting").position().top - 80;
    $("html, body").animate({ scrollTop: topPosition }, "slow");
  });

  $('#icon-support').click(function(e){
    e.preventDefault();
    topPosition = $("#support").position().top - 80;
    $("html, body").animate({ scrollTop: topPosition }, "slow");
  });

  $('#icon-webb').click(function(e){
    e.preventDefault();
    topPosition = $("#webb").position().top - 80;
    $("html, body").animate({ scrollTop: topPosition }, "slow");
  });


  // temporary deactivation of forms
  $(".alert.contact-button").click(function(e){
    e.preventDefault();

    alert("Detta formulär är avaktiverat under tiden webbplatsen är under utveckling. Tack ändå!");

  });

  // scroll to top when toggling right menu
  $(".right-off-canvas-toggle").click(function(e){
    $(window).scrollTop(0);
  });

  // initialize domain lookup
  initDomainLookUp();

  // initialize map
  if (window.location.pathname == "/om-oss/kontakt") {
    initMap();
  }

});

//curtain/splash fadeout effect
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

};

var initDomainLookUp = function () {

  // TODO: add validation and make this more fool proof
  $("#domainSearch").click(function(e) {
    e.preventDefault();

    $("#domainMsg").hide();
    $("#domainList").html("");

    var name = $("#domainName").val();

    // strip extension
    var cleanName = name.substr(0, name.lastIndexOf('.')) || name;
    cleanName = cleanName.replace(/[^a-zåäö0-9\s]/gi, '').replace(/[_\s]/g, '-');

    if (cleanName.length > 0) {

    var url = "https://domai.nr/api/json/search?q=" + cleanName;

      $.ajax({
         dataType: "jsonp",
         url: url
      }).done(function(data){

        var results = data.results;
        var test = [];
        var icon = "";
        var className = "";

        for (var i = 0; i < results.length; i++) {
          if (results[i].availability === "taken") {
            icon = "<i class='fi-x'></i>";
            className = "domain taken";
          } else if (results[i].availability === "available") {
            icon = "<i class='fi-check'></i>";
            className = "domain available";
          } else {
            className = "domain unknown";
          }

          $("<p>" + icon + " " + "<small>" + results[i].domain + "</small></p>").attr('class', className).appendTo("#domainList");

          // console.log(results[i].domain);
          // console.log(results[i].availability);
        }

      });

    }

  });

};
