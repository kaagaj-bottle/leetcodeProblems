var addToArrayForm = function (num, k) {
  num.reverse();
  let arrK = [];
  const stringK = `${k}`;
  const loopLength = num.length > stringK.length ? num.length : stringK.length;

  for (let i = 0; i < stringK.length; i++) {
    arrK[i] = parseInt(stringK[i]);
  }
  arrK.reverse();
  console.log("num: ", num, "arr: ", arrK);

  for (let i = 0; i < loopLength; i++) {
    if (!(i < arrK.length)) {
      arrK[i] = 0;
    }
    if (!(i < num.length)) {
      num[i] = 0;
    }
  }
  console.log("num: ", num, "arr: ", arrK);

  let sum = 0,
    carry = 0;
  for (let i = 0; i < loopLength; i++) {
    sum = arrK[i] + num[i] + carry;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;

      num[i] = sum;
    } else {
      carry = 0;
      num[i] = sum;
    }
  }

  if (carry !== 0) {
    num[arrK.length] = carry;
  }
  num.reverse();
  return num;
};

addToArrayForm([1, 2, 0, 0], 34);
