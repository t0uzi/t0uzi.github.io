// 随机排列
function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
}

// 渲染数据
function renderlink(data) {
  var name, avatar, site, description, li = "";
  shuffle(data);
  for (var i = 0; i < data.length; i++) {
    name = data[i].name;
    avatar = data[i].avatar;
    site = data[i].site;
    description = data[i].description || ''; // 如果没有简介，默认为空字符串
    li += '<div class="card">' +
      '<a href="' + site + '" target="_blank">' +
      '<div class="thumb" style="background: url(' + avatar + ');"></div>' +
      '</a>' +
      '<div class="card-header">' +
      '<div><a href="' + site + '" target="_blank">' + name + '</a></div>' +
      '<div class="description">' + description + '</div>' + // 添加简介
      '</div>' +
      '</div>';
  }
  document.querySelector(".link-navigation").innerHTML = li;
}

// 获取 json 文件
fetch('../links/linklist.json')
  .then(response => response.json())
  .then(res => renderlink(res))
  .catch(error => console.error('Error fetching the JSON file:', error));
