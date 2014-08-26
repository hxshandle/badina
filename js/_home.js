$(function () {
  $('#home-slider').css({width: global.winWidth + 'px'});

  $('#home-slider').slidesjs({
    pagination: {
      active: false
    },
    navigation: {
      active: false
    },
    height: 600,
    width: global.winWidth,
    effect: {
      slide: {
        speed: 800
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
      var backgroundPosY = -(this.height - 900) / 2;
      var pos = backgroundPosX + 'px ' + backgroundPosY + 'px';
      $('#home-section-2').css({'background-position': pos});
    }
    img.src = "./img/home/9158_2560x1600.jpg";
  }

  getBackgroundImageDim();

  //section II
  $('#home-section-2').mousemove(function (e) {
    var $this = $(this),
        scale = 0.2,
        posX = e.pageX,
        posY = e.pageY,
        pX = posX / global.winWidth,
        pY = posY / 900;
    var newPosX = -(backgrounImageDim[0] - global.winWidth) * pX * scale,
        newPosY = -(backgrounImageDim[1] - 900) * pY * scale;
    $this.stop().animate({backgroundPosition: newPosX + 'px ' + newPosY + 'px'});


  });

});