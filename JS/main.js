// Факториал числа // Запомнить!

// function fac(num) {
//   if (num < 0) return;
//   if (num === 1) return num;
//   return num * fac(num - 1);
// }
// console.log(fac(8));

// Функции Таск 5

// function checkTask(num) {
//   let sum = 0;
//   let str = String(num);
//   for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
//   }
//   return sum;
// }

// Замыкание и рекурсия. Таск 3

// function checkTask(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * checkTask(num - 1);
//   }
// }
// let m = checkTask(5);
// console.log(m);

// Замыкание и рекурсия. Таск 4

// function checkTask(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// checkTask(3)(4);

// Замыкание и рекурсия. Таск 5

// function checkTask() {
//   let count = 0;                  //! не прошел
//   return function () {
//     count++;
//     return count;
//   };
// }
// checkTask();
// checkTask();

// Замыкание и рекурсия. Таск 6

// function checkTask(num) {
//   if (num === 0) {
//     return;
//   } else {
//     if (num % 2 === 0) {
//       --num;
//     }
//     console.log(num);
//     checkTask(--num);
//   }
// }
// checkTask(9);

// function checkTask(num) {
//     if(num <= 0) {
//         return
//     }
//     checkTask(num - 1);
//     if(num % 2 !== 0)
//     console.log(num);

// }
// checkTask(9);

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }

// Замыкание и рекурсия.  Таск 7

// let limit = 1000;
// function checkTask(num) {
//   if (num === 1000) {
//     return;
//   } else {
//   }
// }

// Замыкание и рекурсия. Таск 8

// function checkTask(word) {
//   let str = "Hello";
//   str.substr(0);
// }

// Regex. Таск 1 Таск 2

// let str = "aaa aaa aaa";
// let Regex = /aaa/;
// let newStr = str.replace(Regex, "!");
// console.log(newStr);

// function checkTask(str){
//     let reg=/\w\w\w$/g;
//     let result=str.replace(reg,'!')
//         console.log(result)
//     }

// Стрелочные функции. Таск 2

// Напишите стрелочную функцию checkTask(), у которой есть параметры age(возраст, число) и name(имя, строка).
// Функция должна выводить поздравление для указанного имени и возраста, в виде такой строки:
// Happy Birthday 'name'! You are 'age'!
// К примеру, если в аргументы передали 23 и Mike, функция должна вывести строку:
// Happy Birthday Mike! You are 23!

// const checkTask = (age, name) => {
//   console.log(`Happy Birthday ${name}! You are ${age}`);
// };

// checkTask(27, "Mike");

// Regexp. Таск 3

// Дана строка 'a1a a2a a3a a4a a5a aba aca'.
// Напишите регулярное выражение, которое найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
// Замените данные строки на знак $.

// let str = "a1a a2a a3a a4a a5a aba aca";
// function checkTask(str) {
//   let regexp = /\w\d\w/g;
//   let newStr = str.replace(regexp, "$");
//   console.log(newStr);
// }
// checkTask(str);

// Regexp. Таск 4

// Дана строка 'a1a a22a a333a a4444a a55555a aba aca'.
// Напишите регулярное выражение, которое найдет строки, в которых по краям стоят буквы 'a', а между ними любое     // количество цифр и замените их на строку Hy.

// let str = "a1a a22a a333a a4444a a55555a aba aca";
// function checkTask(str) {
//   let regexp = /\w\d+\w/g;
//   let newStr = str.replace(regexp, "Ну");     //! - не пропускает
//   console.log(newStr);
// }
// checkTask(str);

// Regex. Таск 5

// Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'.
// Напишите регулярное выражение, которое найдет строки следующего вида:
// по краям стоят буквы 'a'
// между буквами 'a' маленькие латинские буквы
// Замените данные строки на строку Good.

// let str = "aAXa aeffa aGha aza ax23a a3sSa";
// function checkTask(str) {
//   let regexp = /a[a-z]+a/g;
//   let newStr = str.replace(regexp, "Good");
//   console.log(newStr);
// }
// checkTask(str);

// RegExp Таск 6

// Дана строка 'ae1ea aeea a3544a a1a axxa axxxa'.
// Напишите регулярное выражение, которое найдет строки следующего вида:
// по краям стоят буквы 'a'
// между буквами 'a' стоят буквы 'e' или 'x' в любом количестве
// Замените их на строку many.

// let str = "ae1ea aeea a3544a a1a axxa axxxa";
// const checkTask = (str) => {
//   let regexp = /a[aex]+a/g;
//   let newStr = str.replace(regexp, "many");
//   console.log(newStr);
// };
// checkTask(str);

// Regexp Таск 7

// Дана строка с целыми числами.
// С помощью регулярного выражения преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты.
// К примеру, если строка выглядит так '10 6 3 2', то вывод будет: 100 36 9 4

// var res = "10 6 3 2".replace(/\d+/g, function (match) {
//   return match * match;
// });
// alert(res);
// let str = "10 6 3 2";
// function checkTask(str) {
//   let regexp = /\d+/g;
//   let newStr = str.replace(regexp, function (match) {        //! Разобраться
//     return match * match;
//   });
//   console.log(newStr);
// }
// checkTask(str);

// Regexp Таск 8

// Дана строка с целыми числами.
//Найдите числа, стоящие в кавычках и увеличьте их в два раза.
//К примеру, для строки "2aaa'3'bbb'4'" , вывод будет: 2aaa'6'bbb'8'

// let str = "2aaa'3'bbb'4'";
// function checkTask(str) {
//   let regexp = /\S\d\S/g;

//   let newStr = console.log(newStr);
// }
// checkTask(str);

//! Экстра таски

// Задание №1
// Написать программу расчета площади и окружности круга по радиусу.
// Ввести радиус:
// Вывести площадь и окружность

// function calc(radius) {
//   let s = Math.PI * radius * 2;
//   let t = Math.PI * Math.PI(radius);
//   console.log(s);
//   console.log(t);
// }
// calc(15);

// Задание №2 - Задачи на закрепления
// Если содержимое переменной result больше 23 и меньше 40, выведите 'Hello',
// иначе выведите 'Goodbye'.

// function check(result) {
//   if (result > 23 && result < 40) {
//     console.log("Hello");
//   } else {
//     console.log("Goodbye");
//   }
// }
// check(150);

// Задание №3
// Сделайте 2-e задание используя условный (тернарный) оператор
// function check(result) {
//   result > 23 && result < 40 ? console.log("Hello") : console.log("Goodbye");
// }
// check(160);

// Задание №4
// Есть переменная seasons, если пользователь ввел цифру 1, то выведите
// сообщение 'зима', если 2-'весна', если 3-лето, 4-осень. Используйте Конструкцию
// 'Switch'
// let seasons = +prompt("Введите число от 1-4");
// switch (seasons) {
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("весна");
//     break;

//   case 3:
//     console.log("лето");
//     break;

//   case 4:
//     console.log("осень");
//     break;
// }

// Задание №5
// Используя цикл for вывести все четные числа от 1 до 100;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// Задание №6
// Напишите функцию которая возвращает массив из 4 функций;
// 	•	первая увеличивает счетчик( переменная i )  на 1
// 	•	вторая уменьшает на 1
// 	•	третья умножает на 2
// 	•	четвёртая делит на 2

//  **сделать задание при помощи замыкания!!

// function get(arg) {
//   function get1() {
//     console.log(arg + 1);
//     // return arg++;
//   }
//   function get2() {
//     console.log(arg - 1);

//     // return arg--;
//   }
//   function get3() {
//     console.log(arg * 2);

//     // return arg * 2;
//   }
//   function get4() {
//     console.log(arg / 2);

//     // return arg / 2;
//   }
//   return [get1(), get2(), get3(), get4()];
// }

// get(100);

// function get() {
//   let i = 0;
//   function get1() {
//     return i++;
//   }
//   function get2() {
//     return i--;
//   }
//   function get3() {
//     return i * 2;
//   }
//   function get4() {
//     return i / 2;
//   }
//   return [get1(), get2(), get3(), get4()];
// }
// get();

//  * Задание №7
//  * Напишите функцию которая принимает число и
//  * возвращает его двоичный формат
//  * (Решать при помощи рекурсии)
//  * К примеру:
//  *    func(5) >> 101
//  *    func(6) >> 110
//  *    func(1234321) >> 100101101010110010001

// function func(num) {
//   if (num <= 0) {
//     return;
//   }
//   let hahaha = Number(num).toString(2);  //! - вот так нельзя, это я просто форточку нашел
//   console.log(hahaha);
// }
// func(1234321);

//!Решение
// const convert = (num) => {
//   if (num > 0) {
//     return convert(parseInt(num / 2)) + (num % 2);
//   }
//   return "";
// };
// console.log(convert(6));

// console.log(Number(1234321).toString(2)); (42).toString(2); 42..toString(2)

// Задание №9
// Нужно написать функцию, принимающую строку в качестве
// аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются 'a', 'e', 'i', 'o', 'u'.
// К примеру:
// vowel('hello') // --> 2
// vowel('why') // --> 0

// function check(string) {
//   let str = string.match(/[aeiou]/gi);
//   //   let pattern = /[aeiou]/gi;
//   //   let result = str.match(pattern);

//   console.log(str.length);
// }

// function check(string) {
//   let get = string.match(/[aeiou]/gi);
//   return get === null ? 0 : get.length;
// }

// console.log(check(""));

// Задание №10
// Напишите функцию которая принимает массив из чисел. Находит количество
// четных чисел в массиве и их сумму. И выведите их на экран.
// К примеру:
// let arr9 = [1, 2, 3, 4, 5, 6]
// `Четные числа в массиве: ${newArr} их сумма равна ${sum}`
// четные числа = [2, 4, 6]
// сумма четных чисел = 12
