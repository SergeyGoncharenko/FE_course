//version____________________________1

var a = [8, 3, 5];
var b = [5, 1, 4];

function compare(arr1, arr2) {

    var arr1 = a;
    var arr2 = b;
    console.log(arr1.toString());
    console.log(arr2.toString());

    // array comparison
    function isEqual(arr1, arr2) {
        return ((arr1.sort().toString() === arr2.sort().toString()) && (arr1.length == arr2.length))
    }
    console.log('Проверка на равенство длины массивов и равенство элементов: ' + isEqual(arr1, arr2));

    // compare sum of elements
    Array.prototype.sum = function () {
        for (var i = 0, sum = 0; i < this.length; sum += this[i++]);
        return sum;
    }
    var sum1 = a.sum();
    var sum2 = b.sum();
    console.log('Сумма первого массива: ' + sum1);
    console.log('Сумма второго массива: ' + sum2);


    function bigger() {
        var bigger;
        if (sum1 > sum2) {
            ((bigger = arr1.toString(), result = true), true);
        }
        if (sum1 < sum2) {
            ((bigger = arr2.toString(), result = false), false);
        }
        return bigger;
    }

    return {
        bigger: bigger(arr1, arr2),
        result: false
    }
}
console.log(compare());
//console.log('compare([7,2], [7,2]) ' + bigger([7, 2], [7, 2]));
//console.log('compare([3,1,4], [8]) ' + bigger([3, 1, 4], [8]));
//console.log('compare([3,1,4], [8,2]) ' + bigger([3, 1, 4], [8, 2]));

// 2. Написать функцию, которая сравнивает 2 числовых массива (А, В)
// результатом выполнения функции должно быть:
// - true в случае, если массивы одинаковы по длине, и элементы массива A равны элементам массива B
// - объект вида {result:false, bigger:[1,5,18...]}
// где bigger - отсортированный по возрастанию массив, сумма элементов которого больше.
// Если сумма элементов одинакова - bigger = пустой массив.
// Пример работы функции
// compare([7,2], [7,2]) -> true
// compare([3,1,4], [8]) -> {result:false, bigger:[]}
// compare([3,1,4], [8,2]) -> {result:false, bigger:[2,8]}




//version____________________________2

//var compare = function (arr1, arr2) {
//    if (arr1.length == arr2.length) {
//        for (var i = 0; i < arr1.length; i++) {
//            if (arr1[i] == arr2[i]) {
//                return true;
//            }
//        }
//    } else {
//        var bigger = [];
//        var result = false;
//        var sortArr = function (a, b) {
//            return a - b;
//        };
//        var sum1 = arr1.reduce(function (a, b) {
//            return a + b;
//        });
//        var sum2 = arr2.reduce(function (a, b) {
//            return a + b;
//        });
//        if (sum1 == sum2) {
//            console.log("result:" + result + ", bigger:", bigger);
//        } else if (sum1 > sum2) {
//            console.log("result:" + result + ",", arr1.sort(sortArr));
//        }
//        else {
//            console.log("result:" + result + ", bigger:", arr2.sort(sortArr));
//        }
//    }
//};
//console.log(compare([7, 2], [7, 2]));
//console.log(compare([3, 1, 4], [8]));
//console.log(compare([3, 1, 4], [8, 2]));




//version____________________________3

//var a = [1, 13, 5];
//var b = [5, 1, 2];
//    
//function compare(a, b) {
//    var bigger = '';
//    if (Array.isArray(a) && Array.isArray(b)) {                          //массивы ли это
//        if (a.length == b.length) {                                      //одинаковые по длине?
//            if (JSON.stringify(a) == JSON.stringify(b)) return true;
//        } else {
//            if (summa(a) === summa(b)) {
//                return '{result:false, bigger:[' + bigger + ']}';
//            } else if (summa(a) > summa(b)) {
//                bigger = (a.sort(compareNumeric)).toString();
//            } else {
//                bigger = (b.sort(compareNumeric)).toString();
//            }
//            return '{result:false, bigger:[' + bigger + ']}';
//        }
//    }
//    return false;
//}
//function summa(a) {
//    var sum = 0;
//    for (var i = 0; i < a.length; i++) {
//        sum += parseInt(a[i], 10);
//    }
//    return sum;
//}
//function compareNumeric(a, b) {
//    if (a > b) return 1;
//    if (a < b) return -1;
//}
//console.log(compare());
