for (var i = 1; i <= 10; i++) {
  console.log(i);
}

function getRandNumbers (min,max,length)
{
    let result = [];
    for(let  i = 0 ; i < length ; i ++)
    {
        let number = Math.floor(Math.random() * (max - min) + min) ;
        result.push(number)
    }
    return result ;
}
console.log(getRandNumbers(10,20,5));
// Vòng lặp for Phần 2 ///

function getTotal(arr) {
    let sum = 0;
    for( let i = 0 ; i< arr.length ;i ++)
    {
       sum =  sum + arr[i];
    }
    return sum ;
}
console.log(getTotal([1,2,3]));
// Vòng lặp for phần 3 
var myArray = [
    'HTML',
    'CSS',
    'JS',
    'JAVA'
]
console.log(myArray[1]);

var arrayLength = myArray.length;

for(let i =0 ;i <arrayLength ; i++)
{
    console.log(myArray[i]);
}
// bt 
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders)
{
    var lengthOrders = orders.length;
    var sum = 0;
    for(let i = 0 ; i < lengthOrders ;i++)
    {
       sum = sum +  orders[i].price
    }
    return sum
    
}
console.log(getTotal(orders));