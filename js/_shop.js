$(function(){
  var map = new BMap.Map("allmap");
  map.centerAndZoom(new BMap.Point(116.404, 39.915), 20);
  map.addControl(new BMap.MapTypeControl());
  map.setCurrentCity("北京");
  map.enableScrollWheelZoom(true);


  function _handleCityChange(val){
    var addrInfo = SHOP_ADDRESS[val];
    var point = new BMap.Point(addrInfo.point[1],addrInfo.point[0]);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    map.centerAndZoom(point,20);
    map.setCurrentCity(addrInfo.city);
    var opts = {
      width : 200,     // 信息窗口宽度
      height: 100,     // 信息窗口高度
      title : addrInfo.title , // 信息窗口标题
      enableMessage:true,//设置允许信息窗发送短息
      message:"亲耐滴,戳下面的链接看下地址喔~"
    }
    var infoWindow = new BMap.InfoWindow(addrInfo.txt, opts);  // 创建信息窗口对象
    marker.addEventListener("click", function(){
      map.openInfoWindow(infoWindow,point); //开启信息窗口
    });

  }

  function _handleProvinceChange(val){
    rebuildSelectBox("city",SHOP_CITY[val],_handleCityChange);
  }

  function rebuildSelectBox(sel, data,handler) {
    var h = '<select class=" ' + sel + '" name="' + sel + '" id="' + sel + '">';
    for (var i = 0; i < data.length; i++) {
      var p = data[i];
      h += '<option value="' + p.id + '">' + p.name + '</option>';
    }
    h += '</select>';
    $('.' + sel + '-box').html(h);
    $('#' + sel).selectbox({
      onChange: function(val, inst) {
        handler.call(this,val,inst);
      }
    });
  }
  rebuildSelectBox("province",SHOP_PROVINCE,_handleProvinceChange);
  $('#city').selectbox();

});