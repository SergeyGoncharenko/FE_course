var a = [8, 3, 5];
var b = [5, 1, 4];

function compare(arr1, arr2) {

    var arr1 = a;
    var arr2 = b;
    console.log(arr1.toString());
    console.log(arr2.toString());

    // array comparison
    function isEqual(arr1, arr2) {

        if ((arr1.sort().toString() === arr2.sort().toString()) && (arr1.length == arr2.length)) {
            return true;
        }
        else {
            return false
        }
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
        if (sum1 > sum2) {
            ((bigger = [arr1.toString], result = true), true);
        }
        if (sum1 < sum2) {
            ((bigger = [arr2.toString], result = false), false);
        }
    }

    return {
        bigger: bigger(arr1, arr2),
        result: false
    }
}
console.log(compare());
var a = [7, 2];
var b = [7, 2];
console.log('compare([7,2], [7,2]) ' + bigger([7, 2], [7, 2]));
var a = [3, 1, 4];
var b = [8];
console.log('compare([3,1,4], [8]) ' + bigger([3, 1, 4], [8]));
var a = [3, 1, 4];
var b = [8, 2];
console.log('compare([3,1,4], [8,2]) ' + bigger([3, 1, 4], [8, 2]));

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

