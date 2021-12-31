function countOfAllIndexMatchingNumbers(nums) {
  let matchingCount = 0;
  for (let i = 0; i < nums.length; i++)
  {
    if (nums[i] == i)
    {
      matchingCount++;
    }
  }
  return matchingCount;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;