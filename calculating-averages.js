let Calculator = {
 average: function(...elements) {
   if (elements.length == 0) {
     return 0;
   };
   let number = elements.length;
   let sum = elements.reduce(
     (a,b)=> a + b);                       
   let result = sum / number;
    return result;   
  }
};
/*Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.*/