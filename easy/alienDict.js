var isAlienSorted = function (words, order) {
  let isInOrder = true;
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }
  const wordsLength = words.length;

  for (let i = 0; i < wordsLength - 1; i++) {
    let str1 = words[i];
    let str2 = words[i + 1];
    if (str1.length > str2.length) {
      const substr = str1.substring(0, str2.length);

      if (str2 === substr) {
        isInOrder = false;
      }
    }
    if (!isInOrder) {
      break;
    }
    for (
      let j = 0;
      j < (str1.length > str2.length ? str2.length : str1.length);
      j++
    ) {
      if (map.get(str1[j]) === map.get(str2[j])) {
        continue;
      } else if (map.get(str1[j]) > map.get(str2[j])) {
        isInOrder = false;
        break;
      } else {
        isInOrder = true;
        break;
      }
    }
    if (!isInOrder) {
      break;
    }
  }
  return isInOrder;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
