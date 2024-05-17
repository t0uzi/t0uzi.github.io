var a_idx = 0;
jQuery(document).ready(function($) {
  var colorNames = ["#333", "rgb(77,64,48)"/*淡松烟*/, "rgb(238,160,140)"/*淡罂粟红*/, "rgb(243,71,24)"/*榴花红*/,"rgb(32,137,77)"/*鲸鱼灰*/, "rgb(71,81,100)"/*宫殿绿*/, "red", "Fuchsia", "MediumAquamarine", "yellow", " Blue", "DarkOrange", "MediumSpringGreen", "Crimson"];

  $("body").click(function(e) {
    var a = ["轻轻的我走了", "正如我轻轻的来", "我轻轻的招手", "作别西天的云彩", "那河畔的金柳", "是夕阳中的新娘",
      "波光里的艳影", "在我的心头荡漾", "软泥上的青荇", "油油的在水底招摇", "在康河的柔波里", "我甘心做一条水草!", "那榆荫下的一潭",
      "不是清泉，是天上虹", "揉碎在浮藻间", "沉淀着彩虹似的梦", "寻梦？撑一支长篙", "向青草更青处漫溯", "满载一船星辉", "在星辉斑斓里放歌",
      "但我不能放歌", "悄悄是别离的笙箫", "夏虫也为我沉默", "沉默是今晚的康桥!", "悄悄的我走了", "正如我悄悄的来", "我挥一挥衣袖", "不带走一片云彩"];
    var $i = $("<span/>")
      .text(a[a_idx])
      .css({
        "user-select": "none", // 防止复制
        "font-family": '"Kaiti SC", "KaiTi", "楷体", serif', // 设置楷体
        "font-size": "16px", // 示例：设置字体大小为16像素
        // 可以继续添加更多样式，如字体加粗、斜体等
      });

    var randomColorName = colorNames[Math.floor(Math.random() * colorNames.length)];
    var x = e.pageX,
      y = e.pageY;

    $i.css({
      "z-index": 9999999999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute"
    });

    // 动态应用颜色
    setTimeout(function() {
      $i.css("color", randomColorName);
    }, 0); // 确保颜色在元素添加到DOM后改变

    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });

    a_idx = (a_idx + 1) % a.length;
  });
});
