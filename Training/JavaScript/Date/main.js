// DATE

var date = new  Date();
// nếu không có new Date nó sẽ trả về một String còn nếu có sẽ trả về một object 
console.log(date);

var year =date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDay()+1;
console.log(year);
console.log(month);
console.log(day);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(`${day}/${month}/${year}`);
function getNextYear()
{
    var  year = new Date();
    return year.getFullYear()+1;
}
console.log(getNextYear())