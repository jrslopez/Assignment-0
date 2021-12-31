function countOfAllBooleansAndStrings(arr) {
  let BoolOrStr = 0;
  for (let i = 0; i < arr.length; i++)
  {
    if (typeof arr[i] == "string")
    {
      BoolOrStr++;
    }
    else if (arr[i] === true || arr[i] === false)
    {
      BoolOrStr++;
    }
    else continue;
  }
  return BoolOrStr;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;