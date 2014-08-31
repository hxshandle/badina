$(function(){
  var imageWidth = 500;
  $('.products-gallery ul').each(function(){
    var $this = $(this);
    var _childCount = $(this).children().length;
    $this.css({width:(_childCount*imageWidth)+'px'});
    $this.data('total',_childCount);
    $('li',$this).colorbox({
      rel:$this.data('group')
    });
  });

  var lockMoveView = false;
  function _moveView(forward,$target){
    if(lockMoveView) return;
    var index = $target.data('index');
    var total = $target.data('total');
    if(index == 0 && forward < 0){
      return;
    }
    if(index == total-2 && forward > 0){
      return;
    }
    var nextIndex = index+forward;
    var _left = -nextIndex*imageWidth;
    lockMoveView = true;
    $target.animate({left:_left+"px"},400,function(){
      $target.data('index',nextIndex);
      lockMoveView=false;
    });

  }
  $('.prod-viewer .nav-right').click(function(){
    var $this = $(this);
    _moveView(1,$this.parent().find('ul'));
  });
  $('.prod-viewer .nav-left').click(function(){
    var $this = $(this);
    _moveView(-1,$this.parent().find('ul'));
  });

  $('.prod-menu a').click(function(){
    var $this = $(this);
    if($this.hasClass('active')) return;
    var ref =".product-season-"+$this.data('ref');
    $('.prod-viewer.active').toggleClass('active');
    $('.prod-menu a.active').toggleClass('active');
    $this.toggleClass('active');
    $(ref).toggleClass('active');
  });
});