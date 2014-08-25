(function($) {
  function imageTour() {}
  imageTour.prototype = function() {
    var bbb = 123;
    var $img = null;
    var $curRefEl = null;
    var isActive = false;
    var $mask = null;
    var $wrapper = null;

    function _buildHtml() {
      $mask = $('<div></div>', {
        id: 'image-tour-mask'
      }).appendTo('body');
      $('<a class="image-tour-close"><img src="img/image-tour-close.png"></a>').appendTo($mask).on('click', _close);
      $('<a class="image-tour-pre"></a>').appendTo($mask).on('click', _pre);
      $('<a class="image-tour-next"></a>').appendTo($mask).on('click', _next);
      $wrapper = $('<div class="image-tour-display-wrapper"></div>').appendTo($mask);
      $img = $('<img src="img/_.png"></img>').appendTo($wrapper);
    }
    function _pre() {
      var idx = $curRefEl.index();
      var len = $curRefEl.parent().children().length;
      idx = idx === 0 ? len - 1: idx - 1;
      $curRefEl = $curRefEl.parent().children().eq(idx);
      _show();
    }
    function _next() {
      var idx = $curRefEl.index();
      var len = $curRefEl.parent().children().length;
      idx = idx === len - 1 ? 0: idx + 1;
      $curRefEl = $curRefEl.parent().children().eq(idx);
      _show();
    }
    function _close() {
      $mask.removeClass('active');
    }

    function _check() {
      if ($('#image-tour-mask').length === 0) {
        _buildHtml();
      }
    }
    function _show() {
      var _src = $curRefEl.data('ref');
      var _img = new Image();
      _img.onload = function() {
        var _w = this.width;
        var _h = this.height;
        var _top = (global.winHeight - _h) / 2;
        $wrapper.css({
          width: _w,
          'margin-top': _top
        });
        $img.attr('src', _src);
      }
      _img.src = _src;
    }
    return {
      show: function(targetEl) {
        _check();
        $curRefEl = $(targetEl);
        $mask.addClass('active');
        _show();
      }
    }
  } ();
  window.ImageTour = new imageTour();
})(jQuery);

