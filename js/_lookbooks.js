$(function () {
  var $root = $('#lookbooks'),
      $tsMargin = 100,
      $scrollEasing=500, //scroll easing amount (0 for no easing)
      $scrollEasingType="easeOutCirc"; //scroll easing type

  $('.thumbScroller-container:first', $root).addClass('active');
  // layout
  $('.gallery-entry').each(function () {
    var $this = $(this),
        scrollerWidth = 300 * $this.children().size(),
        sliderWidth = global.winWidth;
    $this.isLookScorller = false;
    $this.css({width: scrollerWidth + 'px', "margin-left": $tsMargin + 'px'});
    var $thumbScroller_container = $this.parents('.thumbScroller-container');
    // bing mouse move
    $thumbScroller_container.mousemove(function (e) {
      if($this.isLookScorller){
        return;
      }
      if (scrollerWidth > sliderWidth) {
        var mouseCoords = e.pageX;
        var mousePercentX = mouseCoords / sliderWidth;
        var destX = -((((scrollerWidth + ($tsMargin * 2)) - (sliderWidth)) - sliderWidth) * (mousePercentX));
        var thePosA = mouseCoords - destX;
        var thePosB = destX - mouseCoords;
        if (mouseCoords > destX) {
          $this.stop().animate({left: -thePosA}, $scrollEasing, $scrollEasingType); //with easing
        } else if (mouseCoords < destX) {
          $this.stop().animate({left: thePosB}, $scrollEasing, $scrollEasingType); //with easing
        } else {
          $this.stop();
        }
      }
    });

    //prevent move for extra area
    $('.extra',$this).hover(
        function(){
          $this.isLookScorller = true;
        },
        function(){
          $this.isLookScorller = false;
        }
    );
  });

  $('#lookbooks-nav a').click(function(){
    var $this = $(this);
    var $currentActive = $('.thumbScroller-container.active');
    if(-1 != $currentActive.attr('id').indexOf($this.data('ref'))){
      return;
    }
    $currentActive.toggleClass('active');
    $("#"+$this.data('ref')+"-thumb-container").toggleClass('active');
  });




});