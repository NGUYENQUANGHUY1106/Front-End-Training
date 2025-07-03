// DOM EVENTS
// attribute events : sử dụng để lắng nghe sự kiện diển ra
// Assign even using the element node : gắn sự kiện sử dụng element 

// click
// onmouseover : khi di chuột vào 
// onmouseout : khi di chuột ra ngoài 
// this là element node
// sự kiện nổi bọt 

var h2Element = document.querySelector('h2');
console.log(h2Element);

h2Element.onclick = function()
{
    alert('Cám ơn các bạn ')
}

var h1Element = document.querySelectorAll('h1');
console.log(h1Element.innerText);
h1Element.onclick = function(e)
{
    console.log(e);
    console.log(e.target);
}

for(var i = 0 ; i < h1Element.length ; i ++)
{
    h1Element[i].onclick = function(e)
    {
        console.log(e.target);
    }
}