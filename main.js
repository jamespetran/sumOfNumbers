function getSum( a,b )
{
   let sum = 0;
      //Good luck!
      if (a === b) {
            return a
      } else if (a>b) {

            for (let i = 0; i < a-b+1; i++) {
                  sum = sum + (b+i);
                  
            }
            return sum
      } else {
            for (let i = 0; i < b-a+1; i++) {
                  sum = sum + (a+i);
            }
            return sum
      }


}

let c = getSum(1,5);
console.log(c);