//Создайте функцию, которая принимает одно положительное трехзначное целое число и переставляет его цифры, чтобы получить максимально возможное число. Предположим, что аргумент является целым числом.

//Return -1 if the argument is not valid
//Возвращает null nil для Ruby, nothing для Julia), если аргумент недопустим.

//maxRedigit(123); // returns 321



var maxRedigit = function(num) {
  if (num < 1) {
    return null;
  }else if (num < 100){
    return null;
  }else if (num > 999) {
    return null;
  }else {
    let str = num + '';
  let arr = str.split('');
  let arrN = arr.map(function(item) {
    return +item;
  });  
  let sort = arrN.sort();
  let rew = sort.reverse();
  
  let resStr = rew.join('');
  let result = Number(resStr);
  
  return result;
  }  
};