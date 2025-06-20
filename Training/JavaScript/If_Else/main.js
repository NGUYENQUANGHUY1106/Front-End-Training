// CÂU LỆNH IF ELSE
var date = 3 ;
if(date ===3)
{
    console.log('Hôm nay là thứ 3');
}
else if (date > 4)
{
    console.log('hôm nay là thứ 4');
}
// câu lệnh if else luôn luôn chỉ có một nhánh đúng 
function run(a) {
    if(a % 15 === 0)
    {
        return '3' ;
    }
    else if(a% 3 === 0)
    {
        return '1' ;
    }
    else if(a% 5 === 0)
    {
        return '2';
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3