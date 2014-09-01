var global={};
global.resizeList = [];
function onResize(){
  var $win = $(window);
  global.winWidth = $win.width();
  global.winHeight = $win.height();
  for (var i = 0; i < global.resizeList.length;i++){
    global.resizeList[i].call(this);
  }
}

function scrollable(selector){
  $(selector).jScrollPane();
}


function switchContent(toggleSelector,relatedSelector){
  $(toggleSelector).click(function(){
    $(toggleSelector).filter('.active').removeClass('active');
    var $this = $(this);
    var ref = $this.data('ref');
    $this.addClass('active');
    $(relatedSelector).filter('.active').removeClass('active').css({display:'none'});
    $('#'+ref).fadeIn().addClass('active').jScrollPane();
  });
}

$(function(){
  onResize();
  $(window).resize(onResize);
});
