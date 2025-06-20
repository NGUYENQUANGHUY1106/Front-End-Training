// MATH OBJECT Math không phải object constructor nên không thể khởi tạo bằng từ khóa new
// 1.Math.PI
console.log(Math.PI);
// 2.Math.round() : làm tròn số đưa vào một số thập phân làm tròn thành số nguyên
console.log(Math.round(1.5));
// 3.Math.abs() : (absolut) giá trị tuyệt đối
console.log(Math.abs(-1));
// 4.Math.ceil() : giúp làm tròn trên 
console.log(Math.ceil(4.1));
// 5.Math.floor() : làm tròn dưới
console.log(Math.floor(4.9999));
// 6.Math.random() : trả về dãy số thập phân nhỏ hơn 1
console.log(Math.random());
// tạo ra dãy só ngẩu nhiên tù 1->10
console.log(Math.floor(Math.random()* 10));
var random1 = Math.floor(Math.random()*5);
var  random = Math.floor(Math.random() * 100);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
]
 console.log(bonus[random1]);


if(random < 5)
{
  console.log('Chúc Mừng Bạn Đã Trúng Xe Máy');
}
else
{
    console.log('Chúc bạn May mắn Lần sau');
}
// 7.Math.min()
console.log(Math.min(-10,2,4,3,6,9));
// 8.Math.max()
console.log(Math.max(-10,3,0,9,8,100));
function getRandomItem (number)
{
    var random = Math.floor(Math.random() * number);
    return random;
}

console.log(getRandomItem(10))


var player = [
    'messi',
    'cr7',
    'neymar',
    'Huy Valverde'
]
function getRandomItem(name)
{
 return name[Math.floor(Math.random()* name.length)]
}

console.log(getRandomItem(player))