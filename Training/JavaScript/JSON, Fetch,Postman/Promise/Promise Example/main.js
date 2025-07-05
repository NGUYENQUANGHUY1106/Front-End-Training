var users = [
  {
    id: 1,
    name: "Kien Dam",
  },
  {
    id: 2,
    name: "Son Dang",
  },
  {
    id: 3,
    name: "Hung Dam",
  },
];
var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Anh sơn chưa ra video :(",
  },
  {
    id: 2,
    user_id: 2,
    content: " Vừa ra xong em ơi ",
  },
];

// lấy comment
// Từ comment lấy ra user_id
// từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return userIds.includes(user.id);
      }, 1000);
      setTimeout(function () {
        resolve(result);
      });
      console.log(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    console.log(comments);
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    console.log(userIds);

    return getUsersByIds(userIds).then(function (user) {
      return {
        users: user,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    console.log(data);

    var commentsBlock = document.getElementById("comments-block");
    var html = "";
    console.log(data.comments);
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      console.log(user);
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentsBlock.innerHTML = html;
  });
