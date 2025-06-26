// một số phương thức của Array Methods:
/* đều có các tham số truyền vào là một hàm 
1. forEach() : duyệt qua tùng phần tử của mảng 
2.every() : 
3.some()
4.find()
5.filter
6.map()
7.reduce
*/

var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML ,CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
];
// forEach()

courses.forEach(function (course, index) {
  console.log(index, course);
});
// every() : tất cả các điều kiện trong mảng phải thỏa mản trả về kiểu boolean kiểm tra một phần tử của mạng phải thỏa mản một điều kiện nào đó
var isFree = courses.every(function (course, index) {
  console.log(index);
  return course.coin === 0;
});

console.log(isFree);
// some : chỉ cần một phẩn từ trong điều kiện đúng thì sẽ đúng   cũng trả lại từng phẩn từ và vị trí của nó mỗi khi duyệt qua

var isSome = courses.some(function (course, index) {
  console.log(index);
  return course.coin === 0;
});

console.log(isSome);

// find(): tìm kiếm và trả về một đối tượng 

var isFind = courses.find(function (course,index) {
  console.log(index);
  return course.name === "HTML ,CSS";
});

console.log(isFind);

// filter  trả về tất cả các phẩn tử thỏa mản 

var isFilter = courses.filter(function(course, index)
{
  console.log(course);
    console.log(index);
    return course.coin === 0 ;
});
console.log(isFilter);

/// bài tập 

const sports1 = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport (F8)
{
    var isSports = F8.filter(function(nameSports, index)
    {
        console.log(index);
        return nameSports.like > 5 ;
    });
    return isSports ;
}



// Kỳ vọng
console.log(getMostFavoriteSport(sports1)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// map(); dùng khi muốn chỉnh sửa hoặc thay đỗi các element của array 

function courseHandler(course,index, originArray)
{
   console.log(course);
   return {
      id: course.id,
      name : `Khóa Học : ${course.name}`,
      coin : course. coin,
      price : `Giá : ${course.coin}`,
      index : index,
      originArray : originArray , // là array ban đầu của chúng ta 

   };
}
var newCoures =  courses.map(courseHandler)

console.log(newCoures);


var newName = courses.map(function(course)
{
 return {
    name : course.name,
 }
});
console.log(newName);
// REDUCE(): CẦN SỬ M,UỐN NHẬN VỀ MỘT GIÁ TRỊ DUY NHẤT SAU KHI TÍNH TOÁN 

// biến lưu trữ 
// thực hiện việc lưu trữ 
var i = 0;
function CoinHandler(accumlator,currentValue,currentIndex,originArray)
{
    var total = accumlator + currentValue.coin;
  i++ ;
  console.table ( {
    'Lượt chạy:' : i ,
    'Biến Lưu trữ :': accumlator,
    ' Giá Khóa Học: ' : currentValue.coin,
    'Tích trử được' : total
  });
  console.log(currentValue);
  return total ;

}
// accumlator biến lưu trữ 
//currentValue giá trị hiện tại 
// currentIndex chỉ mục của currentValue
// originArray trả về cái mảng nào gọi đến reduce mảng lúc đầu 
var totalCoin1 = courses.reduce(CoinHandler, 0 )
// 0 là giá trị khởi tạo biến lưu trữ 

console.log(totalCoin1);

var totalCoin =  0 ; // biến lưu trữ
// lặp qua các phẩn tử 
for(var course of courses)
{
    // thực hiện lưu trử
    totalCoin += course.coin
}
console.log(totalCoin);

// 
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
// làm bằng reduce 

function getTotalGold(arr)
{
    return arr.reduce(function(accumlator,currentValue)
    {
        return accumlator + currentValue.gold;
    },0);
}

// function getTotalGold (arr)
// {
//     var totalGold = 0 ;
//     for(var total of arr)
//     {
//        totalGold += total.gold;
//     }
//     return totalGold ;
// }


// Expected results:
console.log(getTotalGold(sports)) // Output: 23


