setInterval(() => {
    let create_time = Math.round(new Date('2024-05-10 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);
    var nol = function(h){
      return h>9?h:'0'+h;
    }
    if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }
    if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
    }
    if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
    }
    if (second > 0) {
      time[4] = nol(second);
    }
    if ((Number(time[2])<22) && (Number(time[2])>7)){
      currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/白天好-向lyx学习-aqua?style=social&logo=cakephp' title='什么时候可以像梁Pi一样优秀~'><div id='runtime'>" + time[0] + '  YEARS  ' + time[1] + '  DAYS  ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    else{
      currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/晚上好-向wjc学习-skyblue?style=social&logo=coffeescript' title='好好学习不要拖魏哥后腿啦~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    document.getElementById("workboard").innerHTML = currentTimeHtml;
  }, 1000);