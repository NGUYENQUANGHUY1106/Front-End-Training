// FOR IN:  thường dùng vòng lặp này để lấy ra key của các đói tượng

var myInfo = {
    name : 'QuangHuy',
    age  : 18 ,
    address : 'Quang tri'
}

for(var key in myInfo)
{
    console.log(key);
    console.log(myInfo[key]);
}
var languages = [
    'JavaScripts',
    'HTML',
    'Dart',
    'Ruby',
    'PHP'
]
for(var key in languages) // key của một mảng là số 
{
    console.log(key);
    console.log(languages[key]);
}

var name = 'Quang Huy';
for(var  key in name)
{
    console.log(key);
    console.log(name[key]);
}

function run(object) {

    let info = [];
    for (var key in object)
    {
       info.push("Thuộc tính " + key + " có giá trị " + object[key])
    }
    return info ;
   }
   
   // Expected results:
   console.log(run({ name: 'Nguyen Van A', age: 16 }));
   // Output:
   // [
   //     "Thuộc tính name có giá trị Nguyen Van A",
   //     "Thuộc tính age có giá trị 16"
   // ]