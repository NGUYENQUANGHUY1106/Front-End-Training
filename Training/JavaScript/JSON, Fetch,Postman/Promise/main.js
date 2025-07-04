// Callback
setTimeout(function () {
  console.log(1);
}, 1000);
console.log(2);

setTimeout(function () {
  console.log("Dòng này sẽ in ra sau");
}, 0);
// setTimeout là tác vụ bất động bộ (async)

console.log("Dòng này sẽ in ra trước"); // Đây là tác vụ đồng bộ (sync)

///============PAIN ============================///
// Callback hell
// Pyramid of doom

// setTimeout(function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//     setTimeout(function () {
//       console.log(3);
//       setTimeout(function () {
//         console.log(4);
//         setTimeout(function () {
//           console.log(5);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/// ========== Concept ==== ///////////////

// Memory Leak : rò rỉ bộ nhớ
// Lý thuyết , cách hoạt động

// 3 trạng thái của Promise
// 1.Pendding (): chờ
// 2.Fullfilled : thành công
// 3. Rejected : thất bại
var promise = new Promise(
  // Excutor  trả về hai tham số
  // resolve thành công
  // reject thất bại
  function (resolve, reject) {
    // Thành Công ==> resolve()
    // Thất bại  ==> reject()

    // Fake call API
    resolve([
      {
        id: 1,
        name: "PHP",
      },
    ]);
  }
);

promise
  // phương thức then , catch đều nhận một cái callback function
  .then(function (courses) {
    console.log("Successully", courses);
  })
  .catch(function () {
    console.log("Failure!");
  })
  .finally(function () {
    console.log("Done !");
  });
// là một Object constructor trả về một đối tượng

////////====================CHAIN (chuổi)================///////

var promise2 = new Promise(function (resolve, reject) {
  // thành công
  // thất bại
  resolve();
});

promise2
  // nếu không return ra một promise thì sẽ chạy thk .then liền kề
  .then(function () {
    console.log("Thành Công");
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve([1, 2, 3, 4]);
      }, 5000);
    });
    // return new Promise(function(resolve)
    // {
    //     setTimeout(resolve, 3000);
    // })
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function () {
    console.log("Thất Bại");
  })
  .finally(function () {
    console.log("Đã xog");
  });




/// bài tập callback hell

function sleep(ms)
{
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    })
}

sleep(1000)
    .then(function()
    {
        console.log(1);
        return sleep(1000);
    })
    .then(function()
    {
        console.log(2);
        return sleep(1000);
    })
    .then(function()
    {
        console.log(3);
        return sleep(1000);
    })    .then(function()
    {
        console.log(4);
        return sleep(1000);
    })
    