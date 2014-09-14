$(function () {
  $('#home-slider').css({width: global.winWidth + 'px'});

  $('#home-slider').slidesjs({
    pagination: {
      active: false
    },
    navigation: {
      active: false
    },
    height: 873,
    width: global.winWidth,
    effect: {
      slide: {
        speed: 2000
      },
      fade: {
        speed: 300,
        crossfade: true
      }
    }
  });
  var isSliderLook = false;

  function releaseSliderLook() {
    setTimeout(function () {
      isSliderLook = false
    }, 3000);
  }

  function _moveSlider(direction) {
    if (isSliderLook) return;
    isSliderLook = true;
    var $act = $('#home-slider');
    var p = $act.data('plugin_slidesjs');
    if (direction < 0) {
      setTimeout(function () {
        p.previous();
      }, 800);
    } else {
      setTimeout(function () {
        p.next();
      }, 800);

    }
    releaseSliderLook();
  }


  $('#home-slider').mousemove(function (e) {
    var mousePosX = e.pageX;
    if (mousePosX < global.winWidth / 2) {
      _moveSlider(-1);
    } else {
      _moveSlider(1);
    }
  });

  var backgrounImageDim = null;

  function getBackgroundImageDim() {
    var img = new Image();
    img.onload = function () {
      backgrounImageDim = [this.width, this.height];
      var backgroundPosX = -(this.width - global.winWidth) / 2;
      var backgroundPosY = -(this.height - 690) / 2;
      var pos = backgroundPosX + 'px ' + backgroundPosY + 'px';
      $('#home-section-2').css({'background-position': pos});
    }
    img.src = "./img/home/section2-bg.png";
  }

  getBackgroundImageDim();

  //section II
//  $('#home-section-2').mousemove(function (e) {
//    var $this = $(this),
//        scale = 0.4,
//        posX = e.pageX,
//        posY = e.pageY,
//        pX = posX / global.winWidth,
//        pY = posY / 690;
//    var newPosX = -(backgrounImageDim[0] - global.winWidth) * pX * scale,
//        newPosY = -(backgrounImageDim[1] - 690) * pY * scale;
//    $this.stop().animate({backgroundPosition: newPosX + 'px ' + newPosY + 'px'});
//  });

  function animateBG(){
    $('#home-section-2').css("backgroundPosition","0px 0px");
    $('#home-section-2').animate({
      backgroundPosition:"-1900px 0px"
    },10000,"linear",function(){
      animateBG();
    });
  }
  animateBG();

  function resize() {
    $('#home-slider .slider-entry').css({width:global.winWidth+'px'});
    if (global.winWidth > 1470) {
      $('#home-slider .slider-entry .desc').css({
        "margin-right": "35px",
        "float": "right"
      });
      $('#home-slider .slider-entry .bg').removeAttr('style').css({"float": "right"});
    }else{
      $('#home-slider .slider-entry .desc').css({
        "float": "left",
        "margin-right": "0px"
      });
      $('#home-slider .slider-entry .bg').removeAttr('style').css({"left": "500px","position":"absolute"});
    }
  }

  global.resizeList.push(resize);
  resize();
  $('a.move-top').smoothScroll({scrollElement: $('#pages-wrapper'), isSpecScroll: true});

});