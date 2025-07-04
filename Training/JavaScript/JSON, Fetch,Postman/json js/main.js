/**
 1. Event listener: giúp lắng nghe được các event trong DOM xảy ra 

 2. JSON : là  một định dạng dữ liệu  , fomat , chuổi , có thể viết trên máy tính , giấy 
 // được viết tắt  JavaScript Object Notation
 // JSON: Number , Boolean , Null, Array, Object , String
 // Mã hóa : Encode
 // giải mã : decode
 // Stringify : chuyển đổi từ JavaScript type -> JSON
 // Parse : trở lại  từ JSON -> Javascript  types
 3.Fetch

 4,DOM location
 5. Local storage
 6. Session storage
 7.Coding convention
 8. Best Practices
 9. Mistakes
 10. Performance
 */
 // Parse : trở lại  từ JSON -> Javascript  types
 var json2 = '{"name": "Huy", "age" : 18}'
 var json = '["Javascript","PHP"]';

 var a = '1';

 console.log(JSON.parse(a));
 console.log(JSON.parse(json));
 console.log(JSON.parse(json2));

  // Stringify : chuyển đổi từ JavaScript type -> JSON

  console.log(JSON.stringify({
    name : "Huy",
    age : 18
  }));