// JSON server : Fake API server

/// cái json server
/**
 * npm -v : kiểm tra version
 * npm init : tạo package
 * npm i json-server
 * tạo file db.json
 *   "scripts": {
    "start": "json-server --watch db.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, thêm start vào script
  chạy npm start
 */
/**
 * Create : Tạo mới  -> POST
 * Read :Lấy dữ liệu -> GET
 * Update  : Chỉnh Sửa -> PUT / PATCH
 * Sự khác nhau giữa PUT và PATCH:

Khi sử dụng phương thức PUT, phải gửi toàn bộ dữ liệu mới lên máy chủ, kể cả những dữ liệu không muốn thay đổi.
Khi sử dụng phương thức PATCH, chỉ cần gửi trường dữ liệu muốn thay đổi, dữ liệu cũ không thay đổi sẽ được giữ nguyên
Tóm lại PUT thường dùng để thay thế toàn bộ dữ liệu còn PATCH chỉ để thay thế 1 trường dữ liệu cụ thể nào đó
 * Delete : Xóa -> DELETE
 */
// Postman

var courseAPI = "http://localhost:3000/courses";

fetch(courseAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (courses) {
    console.log(courses);
  });
