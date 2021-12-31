function sumOfNumsWithinARange(nums, start, end) {
  let elementsInRange = 0;
    for (var i = 0; i < nums.length; i++)
    {
        if (start <= nums[i] && nums[i] <= end)
            elementsInRange++;
    }
    return elementsInRange;
}


// Do not edit this line;
module.exports = sumOfNumsWithinARange;