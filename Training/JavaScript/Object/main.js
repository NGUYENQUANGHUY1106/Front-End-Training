// OBJECT TRONG JAVA SCRIPT
var emailKey = 'email'
 var myInfo = {
    name: 'Quang Huy',
    age: 18 ,
    address : 'Quảng Trị',
    [emailKey]: 'nguyenquanghuy110605@gmail.com',
    getName: function ()
    {
        return this.name; // this tương đương với myInfo
    }
 }
 var myKey = 'address';
//  myInfo.email = 'nguyenquanghuy110605@gmail.com'
 console.log(myInfo);
 console.log(myInfo.name);
 console.log(myInfo['age']);
 console.log(myInfo[myKey]);
 // xóa 
  delete myInfo.age;
  console.log(typeof myInfo.getName());
  // funciton --> phương thức / method
  // Other --> thuộc tính  / property
  //========================CONSTRUTOR=======////