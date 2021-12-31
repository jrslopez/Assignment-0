function pairSum(nums, target) {
  let isFound = 0;
  if (nums.length <= 1)
    throw "error";
  else
  {
    for (let x in nums)
    {
      for (let y in nums)
      {
        if(nums[x] + nums[y] === target)
        {
          isFound = 1;
          break;
        }
      }
      if (isFound === 1)
        break;
    }
  }
  return Boolean(isFound);
}

// Do not edit this line;
module.exports = pairSum;