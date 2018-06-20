var origin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function testMethod(fn, iterations) {
  var iterations = iterations || 10000;
  var newArr;
  //   console.log('------------------------');
  //   console.log('starting fn: ', fn.name);
  //   console.info(fn.prototype.description);
  //   console.log('iterations: ', iterations);
  var start = performance.now();
  for (var i = 0; i < iterations; i++) {
    newArr = fn(i);
  }
  var end = performance.now();
  var totalTime = parseFloat(((end - start) / 1000).toFixed(5));
  //   console.log('ending fn: ', fn.name);
  //   console.log('total time: ', totalTime + 's');
  //   console.log('------------------------');
  return {
    fn: fn.name,
    totalTime: totalTime,
    newArr: newArr,
    origin: origin
    // averageTime: (totalTime / iterations)
  };
}

function arrayFrom(iterationCount) {
  var newArr = Array.from(origin);
  newArr.push(iterationCount);
  return newArr;
}

arrayFrom.prototype.description =
  "Using the Array.from method to duplicate an array";

function arraySlice(iterationCount) {
  var newArr = origin.slice(0);
  newArr.push(iterationCount);
  return newArr;
}

arraySlice.prototype.description =
  "Using Array.prototype.slice method to duplicate an array";

function arrayObjAssign(iterationCount) {
  var newArr = Object.assign([], origin);
  newArr.push(iterationCount);
  return newArr;
}

arrayObjAssign.prototype.description =
  "Using Object.assign method to duplicate an array";

// var iterations = 1000000;

// var arrayFromTotal = testMethod(arrayFrom, iterations);
// var arraySliceTotal = testMethod(arraySlice, iterations);
// var arrayObjAssignTotal = testMethod(arrayObjAssign, iterations);

// var orderingArr = [arrayFromTotal, arraySliceTotal, arrayObjAssignTotal].sort(function (a, b) {
//     return a.totalTime - b.totalTime;
// });
// console.log('============================');
// console.log('Final Ordering & Comparisons');
// console.log('============================');
// orderingArr.forEach(function (orderedItem) {
//     console.warn(orderedItem.fn + ' => ', orderedItem.totalTime, 'seconds');
// })

module.exports = {
  testMethod: testMethod,
  arrayFrom: arrayFrom,
  arraySlice: arraySlice,
  arrayObjAssign: arrayObjAssign
};
