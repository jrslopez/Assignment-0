function sumOfMinimumAndMaximum(nums) {
  let sum, max, min;
  max = nums[0];
  min = nums[0];
  for (let i = 0; i < nums.length; i++)
  {
    if (max < nums[i])
    {
      max = nums[i];
    }
    else if (min > nums[i])
    {
      min = nums[i];
    }
  }
  sum = min + max;
  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;