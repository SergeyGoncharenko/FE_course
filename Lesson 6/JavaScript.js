var a = [1, 13, 5];
var b = [5, 1, 2];
    // честно стырил
    function fib(n) {
        return function (n, a, b) {
            return n > 0 ? arguments.callee(n - 1, b, a + b) : a;
        }(n, 0, 1);
    }
function compare(a, b) {
    var bigger = '';
    if (Array.isArray(a) && Array.isArray(b)) {                          //массивы ли это
        if (a.length == b.length) {                                      //одинаковые по длине?
            if (JSON.stringify(a) == JSON.stringify(b)) return true;
        } else {
            if (summa(a) === summa(b)) {
                return '{result:false, bigger:[' + bigger + ']}';
            } else if (summa(a) > summa(b)) {
                bigger = (a.sort(compareNumeric)).toString();
            } else {
                bigger = (b.sort(compareNumeric)).toString();
            }
            return '{result:false, bigger:[' + bigger + ']}';
        }
    }
    return false;
}
function summa(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += parseInt(a[i], 10);
    }
    return sum;
}
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
console.log(compare());