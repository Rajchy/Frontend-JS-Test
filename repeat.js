var num = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
var res = "";

for (i = 0; i < num.length; i++) {
    for (j = i + 1; j < num.length; j++) {
        if (num[i] == num[j]) {
            res += num[i] + " ";
            
         }
    }
}
console.log(res);