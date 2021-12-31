function sumOfAllEvenNumbers(nums) {
  let evenCount = 0;
  for (let i = 0; i < nums.length; i++)
  {
    if (nums[i]%2 == 0)
    {
      evenCount++;
    }
  }
  return evenCount;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;