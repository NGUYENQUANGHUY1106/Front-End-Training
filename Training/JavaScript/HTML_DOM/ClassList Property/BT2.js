var listBox = document.querySelectorAll('div');
console.log(listBox);
listBox.forEach(function(index)
{
    index.classList.add('box');
})