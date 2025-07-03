// DOM EVENTS

// 1 . Input / Select 
// 2 .Key up / dowm
var inputValue ;
var inputElement = 
    document.querySelector('input[type ="text"]');

console.log(inputElement);
// oninput sẽ nhận ngay gió trị khi gõ vào input ko cần bờ lơ ra ngoài
inputElement.onchange = function(e)
{
    console.log(e.target.value);
  inputValue = e.target.value;
}

inputElement.onkeydown = function(e)
{
    console.log(e.target.value);
}
inputElement.onkeyup = function(e)
{
    console.log(e.target.value);
}
// trả về keyboardEvent

var inputElementCheckBox = document.querySelector('input[type ="checkbox"]');
console.log(inputElementCheckBox);

inputElementCheckBox.onchange = function(e)
{
    console.log(e.target.checked);
}

var inputElementSelect = document.querySelector('select');
console.log(inputElementSelect);

inputElementSelect.onchange = function(e)
{
    console.log(e.target.value);
}

document.onkeydown = function(e)
{
    switch(e.which)
    {
        case 27 :
            alert('Bạn muốn rời khỏi chứ');
            break; 

    }
}
// onkeypess : nhấn xuống dữ nó sẽ chạy liên tục 