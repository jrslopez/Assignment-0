function titleCaseEdit(title) {
  let arr = title.split(" ");

  for (let i = 0; i < arr.length; i++)
  {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  let title2 = arr.join(" ");
  return title2;
}

// Do not edit this line;
module.exports = titleCaseEdit;