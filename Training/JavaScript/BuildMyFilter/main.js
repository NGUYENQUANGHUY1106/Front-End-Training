
// filter không lặp qua array trống 

var courses =  [
    {
        name : 'Javascript',
        coin : 680
    },
    {
        name : 'PHP',
        coin : 860
    },
    {
        name : 'Ryby',
        coin : 980
    }
]
Array.prototype.filter2 = function(cb)
{
    var output = [];
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
          var result =  cb(this[index], index , this);
          if(result)
          {
              output.push(this[index]);
          }
        }
    }
    return output;
}




 var search = courses.filter2(function(course,index,array)
{
    console.log(course,index,array);
    return course.coin > 700 ;
});
console.log(search);


Array.prototype.myFilter = function(cb) {
    
}





const numbers = [1, 2, 3, 4];

Array.prototype.myFilter = function(cb)
{
    var output = [];
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
          var result  =  cb(this[index], index, this);
          
          if(result)
          {
            output.push(this[index]);
            
          }
        }
    }
    return output
}

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); 
// Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); 
// Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); 
// Output: [1, 2, 3, 4]



