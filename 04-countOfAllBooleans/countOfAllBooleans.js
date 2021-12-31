function countOfAllBooleans(arr) {
  let numBool = 0;
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === true || arr[i] === false)
    {
      numBool+=1;
    }
  }
  return numBool;
}

// Do not edit this line;
module.exports = countOfAllBooleans;