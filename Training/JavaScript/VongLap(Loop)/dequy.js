// ĐỆ QUY : là một hàm tự gọi lại chính nó 
var array = ['a' , 'b' ,'c', 'a' ,'b', 'c'];


console.log([...new Set(array)]);
console.log(new Set([1,2,3,1,2,3]));

// xác nhận điểm dừng 
// logic handle ==> tạo ra cái điểm dừng 
function deQuy(num)
{
    if(num < 0 )
    {
        return ;
    }
}

deQuy(10);

// bài toán 
// ứng dụng countdow

 function  countDown(num)
 {
    if(num >0)
    {
        console.log(num);
        return countDown(num -1);
    }
    return num;

 }

 countDown(3);

 function loop(start,end ,cb)
 {
    cb(start)
    if(start <  end)
    {
      return loop(start +1 ,end ,cb)
    }
 }

 var array = ['Javascript','PHP','Ruby'];

 loop(0, array.length -1 , function(index)
 {
    console.log('index', index);
    console.log(array[index]);
 });

 // tính giai thừa

 function giaiThua(number)
 {
    if(number > 0)
    {
        return number * giaiThua(number -1);
    }
    return 1;

 }
 console.log(giaiThua(6));