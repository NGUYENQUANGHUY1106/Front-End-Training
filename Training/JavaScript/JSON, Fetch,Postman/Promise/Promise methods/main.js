// Promise.resolve
// Promise.reject
// Promise.all chạy song song các promise

var promise = Promise.resolve('Thành Công')
promise
    .then(function(result)
    {
        console.log(result);
    })
    .catch(function(err)
    {
        console.log('Error',err);
    })

// Promise.all

var promise1 = new  Promise(function(resolve)
{
    setTimeout(function()
    {
        resolve([1])
    },2000);
})

var promise2 = new  Promise(function(resolve)
{
    setTimeout(function()
    {
        resolve([2,3])
    },5000);
})

Promise.all([promise1,promise2])
    .then(function(result)
    {
        console.log(result);
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    });

// ES 6 
// Promise.all([promise1,promise2])
//     .then(function([result1,result2])
//     {
//         console.log(result1.concat(result2));
//     })