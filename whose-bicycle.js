function whoseBicycle(diary1, diary2, diary3) {
  let sumFirst = 0;
  for (let key in diary1) {
    sumFirst += diary1[key];
  };
  
  let sumSecond = 0;
  for (let key in diary2) {
    sumSecond += diary2[key];
  };
  
  let sumThird = 0;
  for (let key in diary3) {
    sumThird += diary3[key];    
  };
  
  let max = Math.max(sumFirst, sumSecond, sumThird);
  
  if (max == sumFirst && sumFirst > sumSecond && sumFirst > sumThird) {
    return ('I need to buy a bicycle for my first son.');
  } else if (max == sumSecond && sumSecond > sumFirst && sumSecond > sumThird || sumSecond == sumFirst && sumSecond > sumThird) {
    return ('I need to buy a bicycle for my second son.');
  } else if (max == sumThird || sumThird == sumSecond && sumThird == sumFirst) {
    return ('I need to buy a bicycle for my third son.');
  };
  }
  
   /*I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:

const ageTable = {
                  'firstSonAge': 14,
                  'secondSonAge': 9,
                  'thirdSonAge0': 8
                }*/