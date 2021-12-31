function frequencyCounter(word)
{
  let frequencyCount = {};
  for(let i = 0; i < word.length; i++)
  {
    if (frequencyCount[word.charAt(i)])
    {

      frequencyCount[word.charAt(i)] += 1;
    } 
    else
    {
      frequencyCount[word.charAt(i)] = 1;
    }
  }
  return frequencyCount;
}

// Do not edit this line;
module.exports = frequencyCounter;