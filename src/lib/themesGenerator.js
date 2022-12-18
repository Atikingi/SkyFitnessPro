const themesGenerator = (colorArr, itemArr) => {
  let resultArr = [];

  for (let i = 0, j = 0; i < itemArr.length; i++, j++) {
    if (j === colorArr.length) {
      j = 0;
    }

    resultArr.push(colorArr[j]);
  }

  return resultArr;
};

export default themesGenerator;
