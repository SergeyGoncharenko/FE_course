//version____________________________1___(use webWorker)
window.onload = function () {
    document.getElementById("startButton").onclick = function () {
        // Создание нового потока
        var worker = new Worker("fibonachiWorker.js");

        // Создание обработчика для получения сообщений от потока
        worker.addEventListener("message", function (e) {
            document.getElementById("output").innerHTML += e.data + "<br />";
        }, false);

        // запуск потока
        worker.postMessage("");
    }
}

//3. Реализуйте функцию вычисления ряда чисел Фибоначчи, используя замыкания-->
//Чи́сла Фибона́ччи — элементы числовой последовательности
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, …
//в которой каждое последующее число равно сумме двух предыдущих чисел.

//version____________________________2

// честно стырил
//    function fib(n) {
//        return function (n, a, b) {
//            return n > 0 ? arguments.callee(n - 1, b, a + b) : a;
//        }(n, 0, 1);
//    }


//version____________________________3

//var fib1 = function () {
//    var a = 1, b = 1, c = 0;
//    return function (n) {
//        if (n == 1) return a;
//        for (var i = 2; i < n; i++) {
//            c = a + b;
//            a = b;
//            b = c;
//        }
//        return b;
//    }
//}
//var fib2 = function (n) {
//    return n > 1 ? fib2(n - 1) + fib2(n - 2) : n;
//};
//var numb = fib1();
//console.log(numb(9));
//console.log(fib2(9));
