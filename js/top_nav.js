$(function () {
  function toggleTopNav() {
    var scrollTop = $(window).scrollTop();
    var WH = $(window).height();
    if (scrollTop > WH - 77) {
      $('.top-nav').fadeIn(1000);
    } else {
      $('.top-nav').fadeOut(1000);
    }
  }

  //$(window).on('scroll', toggleTopNav);


  function getChineseTextLength(val) {
    var testEl = $('<span>').css({position: 'absolute', left: '-500px', top: '-100px'});
    testEl.text(val);
    testEl.appendTo(document.body);
    var _w = testEl.width();
    testEl.remove();
    return _w;
  }

  // click
  $('.top-nav-bar a').click(function () {
    App.switchPage($(this).attr('href'));
    return false;
  });
  // hover 
  $('.top-nav-bar a').hover(
    function () {
      var $this = $(this);
      var _w = $this.width();
      var _zhw = getChineseTextLength($this.data('zh'));
      _w = _w < _zhw ? _zhw : _w;
      $this.data('en', $this.text());
      $this.text($this.data('zh')).css({
        display: 'inline-block',
        width: _w + 'px'
      });

    },
    function () {
      var $this = $(this);
      $this.text($this.data('en')).css({
        display: 'inline'
      });
    });
  $('.top-menu-toggle').click(function () {
    $('.top-menu').toggle();
  });
  $(window).resize(function () {
    var WW = $(window).width();
    if (WW > 1460) {
      $('.top-menu').show();
    } else {
      $('.top-menu').hide();
    }
  });
});

