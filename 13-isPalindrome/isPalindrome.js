function isPalindrome(word) {
  let isPalindrome = true;
  const wordArr = word.split('');
  let j = wordArr.length;
  for (let i = 0; i < j; i++)
  {
    if (wordArr[i] != wordArr[j - 1])
    {
      isPalindrome = false;
      break;
    }
    else j--;
  }
  return isPalindrome;
}

// Do not edit this line;
module.exports = isPalindrome;