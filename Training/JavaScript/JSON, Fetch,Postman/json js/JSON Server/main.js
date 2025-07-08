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

// var courseAPI = "http://localhost:3000/courses";

// fetch(courseAPI)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (courses) {
//     console.log(courses);
//   });

var listCoursesBlock = document.getElementById("list-courses");

var coursesApi = "http://localhost:3000/courses";

function start() {
  getCourese(function (courses) {
    console.log(courses);
    renderCourses(courses);

    hadleCreateForm();
  });
}

start();

function getCourese(callback) {
  fetch(coursesApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      callback(data);
    });
}

function renderCourses(courses) {
  var html = courses.map(function (course) {
    return `

    <li class ="courses-item-${course.id}">
      <h4>
        ${course.name}
      </h4>
      <p>
        ${course.description}
      </p>
      <button onclick="deleteCourses('${course.id}')">Delete</button>    </li>
      <button onclick="editCourses('${course.id}', '${course.name}', '${course.description}')">Edit</button>
      `;
  });
  listCoursesBlock.innerHTML = html.join("");
}

function createCourses(data, callback) {
  var options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  fetch(coursesApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}
function deleteCourses(id) {
  var options = {
    method: "DELETE",
  };
  fetch(coursesApi + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      // getCourese(function (courses) {
      //   renderCourses(courses);
      // });

      var xoa = document.querySelector(".courses-item-" + id);
      if (xoa) {
        xoa.remove();
      }
    });
}
var idCourses = null;
function editCourses(id, name, description) {
  console.log(id, name, description);
  idCourses = id;
  document.querySelector('input[name = "name"]').value = name;
  document.querySelector('input[name = "description"]').value = description;

  var btn_create = document.getElementById("create");
  btn_create.innerText = "Update"; 
}

function hadleCreateForm() {
  var btn_create = document.getElementById("create");
  console.log(btn_create);

  btn_create.onclick = function () {
    var name = document.querySelector('input[name = "name"]').value;
    console.log(name);
    var description = document.querySelector(
      'input[name = "description"]'
    ).value;
    console.log(description);

    var formData = {
      name: name,
      description: description,
    };
    createCourses(formData, function () {
      getCourese(function (courses) {
        renderCourses(courses);
      });
    });
  };

  if(idCourses)
  {
    var updateData = {
      name : name ,
      description : description
    };
    updateCourses(idCourses,updateData,function()
    {
      getCourese(renderCourses);
      idCourses = null ;
      clearInput();
      btn_create.innerText = 'Create';
    })
  }
}

function updateCourses(id,data,callback)
{
  var options = {
    method : 'PATCH',
    body : JSON.stringify(data)
  }
  fetch(coursesApi+ '/' + id,options)
    .then(function(response)
    {
         response.json();
    })
    .then(callback);
}

function clearInput()
{
  document.querySelector('input[name = "name"]').value = '';
  document.querySelector('input[name = "description"]').value = '';
}