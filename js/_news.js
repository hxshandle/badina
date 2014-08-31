$(function () {
  var ListHeight = 0;

  function sort($el) {
    var h = [];
    var box = $el.children();//el.getElementsByTagName("li");
    var minH = box.eq(0).data('height'),
        boxW = 250,
        boxH,
        n = 4; //计算页面能排下多少Pin

    for (var i = 0; i < box.length; i++) {
      boxh = box.eq(i).data('height'); //获取每个Pin的高度
      if (i < n) { //第一行Pin以浮动排列，不需绝对定位
        h[i] = boxh;
        box[i].style.position = '';
      } else {
        minH = Math.min.apply({},
            h); //取得各列累计高度最低的一列
        minKey = getarraykey(h, minH);
        h[minKey] += (boxh + 1); //加上新高度后更新高度值
        box[i].style.position = 'absolute';
        box[i].style.top = (minH + 1) + 'px';
        box[i].style.left = (minKey * boxW) + 'px';
      }
    }
    ListHeight = Math.max.apply({}, h);
    $('#news .container').css({height: +ListHeight + "px"});
  };
  /* 返回数组中某一值的对应项数 */
  function getarraykey(s, v) {
    for (k in s) {
      if (s[k] == v) {
        return k;
      }
    }
  };
  sort($('#news .container ul').eq(0));

  $("ul.list li").colorbox({
        rel: "news-list",
        current: "News {current} of {total}",
        width:1042,
        height:632,
        html:function(){
          var $this = $(this);
          return $this.find('.news-detail-wrapper').html();
        },
        onComplete:function(){
          $('#cboxLoadedContent .news-article').jScrollPane();
        }
      }
  );
});
