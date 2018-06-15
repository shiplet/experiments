(function(){
    var origin = [1,2,3,4,5,6,7,8,9,0];

    function testMethod(fn, iterations) {
        var iterations = iterations || 10000;
        console.log('------------------------');
        console.log('starting fn: ', fn.name);
        console.info(fn.prototype.description);
        console.log('iterations: ', iterations);
        var start = performance.now();
        for(var i = 0; i < iterations; i++) {
            fn();
        }
        var end = performance.now();
        var totalTime = parseFloat(((end - start) / 1000).toFixed(5));
        console.log('ending fn: ', fn.name);
        console.log('total time: ', totalTime + 's');
        console.log('------------------------');
        return {
            fn: fn.name,
            totalTime: totalTime,
            // averageTime: (totalTime / iterations)
        };
    }

    function arrayFrom() {
        var newArr = Array.from(origin);
        newArr.push(10);
        if(newArr.length === origin.length) {
            console.log('arrays are same length');
        }
    }

    arrayFrom.prototype.description = 'Using the Array.from method to duplicate an array';

    function arraySlice() {
        var newArr = origin.slice(0);
        newArr.push(10);
        if(newArr.length === origin.length) {
            console.log('arrays are same length');
        }
    }

    arraySlice.prototype.description = 'Using Array.prototype.slice method to duplicate an array';

    function arrayObjAssign() {
        var newArr = Object.assign([], origin);
        newArr.push(10);
        if(newArr.length === origin.length) {
            console.log('arrays are same length');
        }
    }

    arrayObjAssign.prototype.description = 'Using Object.assign method to duplicate an array';

    var iterations = 1000000;

    var arrayFromTotal = testMethod(arrayFrom, iterations);
    var arraySliceTotal = testMethod(arraySlice, iterations);
    var arrayObjAssignTotal = testMethod(arrayObjAssign, iterations);

    var orderingArr = [arrayFromTotal, arraySliceTotal, arrayObjAssignTotal].sort(function(a,b){
        return a.totalTime - b.totalTime;
    });
    console.log('============================');
    console.log('Final Ordering & Comparisons');
    console.log('============================');
    orderingArr.forEach(function(orderedItem){
        console.warn(orderedItem.fn + ' => ', orderedItem.totalTime, 'seconds');
    })
})()