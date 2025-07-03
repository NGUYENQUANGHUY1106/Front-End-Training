// 1. prevenDefault : loại bỏ hành vi mặc định của trình duyệ ttrreen một thẻ html 
// 2. stopPropagation : loại bỏ được sự kiện nổi bọt 
var aElement = document.querySelectorAll('a');
console.log(aElement);

var aElement2 = document.anchors;
console.log(aElement2);

var aElement3 = document.links ;
console.log(aElement3);

for(var i = 0 ; i<aElement3 .length ; i++)
{
    aElement3[i].onclick = function(e)
    {
        console.log(e.target.href);
        
        if(!e.target.href.startsWith('https://f8.edu.vn'))
        {
            e.preventDefault();
        }
    }
}
//  startsWith kiểm tra xem chuổi có bắt đầu bằng chuổi gì đó k 
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e)
{
    e.preventDefault();
}
ulElement.onclick = function(e)
{
    console.log(e.target);
}

// stopPropagation

document.querySelector('div').onclick =  function()
{
     console.log('div');
}

document.querySelector('button').onclick = function(e)
{
    e.stopPropagation()
    console.log('Click Me !');
}