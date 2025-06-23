//FOR OF : dùng đẻ lấy ra phẩn tử của một mamgr hoặc từng chữ cái của một chuổi  ko áp dụng cho object

var languages = [
    'JavaScripts',
    'PHP',
    'JAVA'
]

for (const value of languages) {
    console.log(value);
}
// trường hợp object 

var myInfo = 
{
    name : 'Son Dang',
    age : 18,
}
for(var value of Object.keys(myInfo))
{
    console.log(myInfo[value]);
}
console.log(Object.keys(myInfo));

console.log(Object.values(myInfo));

for(var key of Object.values(myInfo))
{
    console.log(key);
}