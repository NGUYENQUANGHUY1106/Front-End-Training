// EMPTY không phải là kiểu dữ liệu 

 var coures = [
    'Javascript',
    'PHP',
    'Ruby'
 ]
 console.log(coures);
coures.length = 10;
console.log(coures.length);
 for ( var index in coures)
 {
    console.log(index);
    console.log(coures[index]);
 }


 