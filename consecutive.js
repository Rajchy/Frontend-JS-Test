var num = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0];
var count = 0, consecutiveOne = 0;
for (var i = 0; i < num.length; i++) {
    if (num[i] == 1) {
        count++;
        consecutiveOne  = Math.max(count, consecutiveOne);
    }
    else {
        count = 0;
    }
    
}
console.log(consecutiveOne);