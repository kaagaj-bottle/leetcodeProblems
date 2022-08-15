var rearrangeArray = function (nums) {
  const posNums = nums.filter((num) => num >= 0);
  const negNums = nums.filter((num) => num < 0);
  let newNums = [];
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (i % 2 === 0) {
      newNums[i] = posNums[i / 2];
    } else {
      newNums[i] = negNums[Math.floor(i / 2)];
    }
  }
  return newNums;
};

rearrangeArray([3, 1, -2, -5, 2, -4]);
