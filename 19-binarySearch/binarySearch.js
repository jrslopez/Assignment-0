class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let midKey = Math.floor(nums.length / 2);
    if (nums[midKey] == target)
      return true;
    else if (nums.length == 1 && target != nums[0])
      return false;
    else if (nums[midKey] < target)
      return this.binarySearch(nums.slice(midKey), target);
    else (nums[midKey] > target)
      return this.binarySearch(nums.slice(0,midKey), target);
  }
}
;


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;