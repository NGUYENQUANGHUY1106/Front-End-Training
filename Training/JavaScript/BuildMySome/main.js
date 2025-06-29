// Some chỉ cần một điều kiện đúng sẽ trả về phẩn tử đó và  mảng được xét đó sẽ đúng 
// some không lặp qua array rổng 
var courses = [
    {
        name : 'Javascript',
        coin : 680 ,
        isFinish : true,
    },
    {
        name  : 'PHP',
        coin : 860 ,
        isFinish : false,
    },
    {
        name : 'Ruby',
        coin : 980 ,
        isFinish : false
    }
]
 
Array.prototype.some2 = function(cb)
{
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
    {
         if(cb(this[index],index,this))
         {
            return true;
         }
    }
    }
    return false;
}

 var check = courses.some2(function(course,index,array)
{
    console.log(index);
    return course.isFinish === true;
});
console.log(check);
//
Array.prototype.mySome = function(cb) {
    
}




const numbers = [1, 3, 3, 5];
 Array.prototype.mySome = function(cb)
 {
    var output  = false;
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
           var result =  cb(this[index], index,this);
              if(result)
              {
                return true ;
              }
        }
    }
    return output;
 }

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); 
// Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); 
// Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); 
// Output: true
 


