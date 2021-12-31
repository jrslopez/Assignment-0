function setUnionOfAnyAmountOfSets(...args) {
  const result = new Set();
  for (let x in arguments)
  {
    for (let y of arguments[x]){
      result.add(y);
    }
  }
  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;