
var myArray = [
    [1,2],
    [3,4],
    [5,6]
]

for (var i = 0 ;i < myArray.length ; i++)
{
    console.log(myArray[i]);
    for(var j = 0 ; j <myArray[i].length; j++)
    {
        console.log(myArray[i][j]);
    }
}

// VỊ DỤ VỀ VÒNG LẶP
for (var i = 100 ;i > 0 ;i --)
{
    console.log(i);
}

for(var  i = 0 ; i < 100 ; i+=5)
{
   console.log(i);
}
for (var i = 100 ; i > 0 ;i -=5)
{
    console.log(i);
}