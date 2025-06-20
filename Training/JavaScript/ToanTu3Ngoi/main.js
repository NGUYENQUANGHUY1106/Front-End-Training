// Toán tử 3 ngôi (Ternary operator)
var course = {
    name : "JavaScript",
    coin : 250
}
if(course.coin > 0)
{
    console.log(`${course.coin} Coin`);
}
else
{
    console.log("Miển Phí");
}
// Làm theo toán tử 3 ngôi
var result = course.coin > 0 ? `${course.coin} Conis` : "Miển Phí";
console.log(result);

var a =-1 ;
var b = 2 ;
var c = a>0 ? a :b ;
console.log(c);

function getCanVoteMessage(age)
{
    var result = age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu"
    return  result;
}




// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'