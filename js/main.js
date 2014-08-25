var WW, WH;
var App={
  switchPage:function(pageId){
    console.debug("switch page "+pageid);
  }
};
function landingLayout() {
  $('.page-wrapper').css({width:WW+'px',"min-height":WH+'px'});
}

function doResize() {
	WW = $(window).width();
	WH = $(window).height();
	landingLayout();
}

function doNivoSlider(){
  $('.nivoSlider').nivoSlider({
    effect:'fade',
    pauseTime:5000,
    animSpeed:1500,
    directionNav:false,
    controlNav:false,
    pauseOnHover:false
  });
}

$(function() {
	$('.jScrollPane').jScrollPane();
	$(".img-liquid-fill").imgLiquid();
	$(".img-liquid-fill-top").imgLiquid({verticalAlign:'top'});
	$('.top-menu a,.scroll-down').smoothScroll({offset:-99});
	doResize();
	$(window).resize(doResize);
  doNivoSlider();
});

