function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
  {
    if (target > nums[i])
    {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;