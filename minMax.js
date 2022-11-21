
var average = function(salary) {

    //sorting
  let sortSalary = salary.sort((a, b) => a - b);


  let min = salary[0],
    max = salary[salary.length - 1];

 
  let newSalary = salary.filter(
    (value) => [min, max].indexOf(value) === -1
  );

  
  let sum = 0;
  for (let value of newSalary) {
    sum += value;
  }

 
  return sum / newSalary.length;
};



// function getMinMaxForLoop(arr){
//   let maximum = arr[0];
//   let minimum = arr[0];
//   for (let i = 0 ; i < arr.length; i++) {
//     if (maximum < arr[i]) {
//       maximum = arr[i];
//     } else {
//       minimum = arr[i];
//     }
    
//   }
//  let result =  ([maximum, minimum]); 
//   return result;
// };
// console.log('getMinMaxForLoop : ',getMinMaxForLoop([10,3,8,1,33]))