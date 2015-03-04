out();
document.getElementById("outBtn").addEventListener("click", out, false);
function out() {
    var arr = document.getElementById("input").value.split(";");
    var resultArea = document.getElementById("result");
    var length = arr.length;
    var result = [];
    var x, y;
    //获取输入字符串并转换成二维数组
    for (var k = 0; k < arr.length; k++) {
        arr[k] = arr[k].split(",");
    }
    //横向从右向左
    for (var i = length - 1; i >= 0; i--) {
        x = 0;
        y = i;
        while (y < length) {
            result.push(arr[x][y]);
            x++;
            y++;
        }
    }
    //竖向从上向下
    for (var j = 1; j < length; j++) {
        x = j;
        y = 0;
        while (x < length) {
            result.push(arr[x][y]);
            x++;
            y++;
        }
    }
    resultArea.value = result.join(",");
}