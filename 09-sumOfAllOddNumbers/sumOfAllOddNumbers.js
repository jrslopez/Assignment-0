function sumOfAllOddNumbers(nums) {
  let oddCount = 0;
  for (let i = 0; i < nums.length; i++)
  {
    if (nums[i]%2 != 0)
    {
      oddCount++;
    }
  }
  return oddCount;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;