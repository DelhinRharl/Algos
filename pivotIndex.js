const pivotIndex =(nums)=>{


   let totalSum = 0; 
   let leftSum = 0; 

   nums.forEach((element) => totalSum += element);
   for(let e=0; e<nums.length; e++){
      if(totalSum - leftSum - nums[e] === leftSum){
         return e;
      }
      leftSum += nums[e]
   }
   return -1;
}

console.log(pivotIndex([1,7,3,6,5,6]));