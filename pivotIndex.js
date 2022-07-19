const pivotIndex =(nums)=>{


   let totalSum = 0; 
   let leftSum = 0; 

   nums.forEach((element) => totalSum += element);
   for(let i=0; i<nums.length; i++){
      if(totalSum - leftSum - nums[i] === leftSum){
         return i;
      }
      leftSum += nums[i]
   }
   return -1;
}

console.log(pivotIndex([1,7,3,6,5,6]));