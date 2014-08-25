var WW, WH;
var App={
  blockedPageSwitch:false,
  switchPage:function(pageId){
    if(this.blockedPageSwitch){
      console.debug('blocked ...');
      return;
    }
    var currentActivePageId = $('.page.active').attr('id');
    if(pageId.substr(1) == currentActivePageId){
      return;
    }
    // start switch
    this.blockedPageSwitch = true;
    var that = this;
    $(pageId).css({left:WW+'px','z-index':200}).toggleClass('active');
    $(pageId).animate({left:"0px"},800,'swing',function(){
      $('#'+currentActivePageId).toggleClass('active').css({'z-index':100});
      $(pageId).css({'z-index':100});
      that.blockedPageSwitch = false;
    });

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

