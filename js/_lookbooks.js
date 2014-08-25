$(function () {
  var $root = $('#lookbooks');
  $('.gallery-entry:first', $root).addClass('active');
  // layout
  $('.gallery-entry').each(function () {
    var $this = $(this);
    var w = 300 * $this.children().size();
    var _left = -(w - global.winWidth) / 2;
    if(w < global.winWidth){
      _left = 0;
    }
    $this.css({width: w + 'px',left:_left+'px'});
  });

  //mouse move
  $('.gallery-entry').each(function(){
    var $this = $(this);
    $this.mousemove(function(evt){

    });
  });

});