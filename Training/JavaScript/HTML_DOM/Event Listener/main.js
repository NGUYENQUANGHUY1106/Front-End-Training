/**
 1. Event listener: giúp lắng nghe được các event trong DOM xảy ra 
 2. JSON
 3.Fetch
 4,DOM location
 5. Local storage
 6. Session storage
 7.Coding convention
 8. Best Practices
 9. Mistakes
 10. Performance
 */


var button = document.getElementById('btn');
console.log(button);

// button.addEventListener('click' ,function(e)
// {
//    console.log(Math.random());
// });

function viec1 ()
{
    console.log('Việc 1');
}

function viec2 ()
{
    console.log('Việc 2');
}
button.addEventListener('click', viec1);
button.addEventListener('click', viec2);

// 2. Lắng nghe /  Hủy bỏ lắng nge 

setTimeout(function()
{
    button.removeEventListener('click',viec1)
},3000);



// 1. xử lý nhiều việc khi 1 event xảy ra 

// trường hợp 3 giây sau mới hoạt động 

// setTimeout(function(){
//     button.onclick =  function()
// {
//     console.log('Việc 1');

//     console.log('Việc 2');

//     alert('Việc 3')

// }
// },3000);
// trường hợp chỉ hoạt động trong ba giây đầu 

// button.onclick = function ()
// {
//     console.log('Việc 1');

//     console.log('Việc 2');

//     alert('Việc 3')

// }

// setTimeout(function(){
//     button.onclick = {}
// })