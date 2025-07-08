var users = [
  {
    id: 1,
    name: "Quang Huy",
    avatar:
      "https://scontent.fsgn5-7.fna.fbcdn.net/v/t39.30808-6/506349008_735335982509788_4126184958658296829_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2xnwHljMaOoQ7kNvwGsTc_U&_nc_oc=AdmOexPcX4nJBex0tq7JYwz1WKNWXzYNJaYZc4KbVTCRkRN0s6D_yM7Izu1c46uo5HZRS53NjEFDiXuvVRSLyDh3&_nc_zt=23&_nc_ht=scontent.fsgn5-7.fna&_nc_gid=MtsJXsir-HMVr52ySO8AgQ&oh=00_AfRT2qzh0lnp_7zIBJcJSpZ8-SEnv2DFiaFXAvH9ntUlww&oe=68719DBC",
  },
  {
    id: 2,
    name: "Thiên Trang",
    avatar:
      "https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/506407875_735336052509781_6125814897592320139_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=G3Ah9UbXNU4Q7kNvwEmJ91C&_nc_oc=AdmjtJ06SAvZ9vKYAhAJmbobsD_S7O0d7z-aCgLCPeHVKNANilX_J1XIZNb_Z0jbir03vFJzrI0KoVCNEkxJvMbO&_nc_zt=23&_nc_ht=scontent.fsgn5-1.fna&_nc_gid=zwDV-uPVWFbGrwf8aq1zaQ&oh=00_AfQ-NHq-1A4iMCXPhiflIj4wTlzrE1HK8VIWz2aZmTVi7Q&oe=687197B9",
  },
  {
    id: 3,
    name: "Manchester United",
    avatar : "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png"
  },
];
var feelings = [
  {
    id: 1,
    user_Id: 1,
    comment: "Quá là đẹp trai .You are handsome",
  },
  {
    id: 2,
    user_Id: 2,
    comment: "So beautyfull honey",
  },
  {
    id: 3,
    user_Id: 3,
    comment: "Glory glory Manchester United . Đội Bóng Yêu ",
  },
];

function getFellings() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(feelings);
    }, 1000);
  });
}

function getUserid(user_id) {
  return new Promise(function (resolve) {
    var result = users.filter(function (us) {
      return user_id.includes(us.id);
    });
    console.log(result);
    resolve(result);
  });
}

getFellings().then(function (feeling) {
  console.log(feeling);
  var user_id = feeling.map(function (fl) {
    return fl.user_Id;
  });
  console.log(user_id);

  return getUserid(user_id).then(function (user) {
     return{
        users :user ,
        feelings : feeling
     }
  });
})
.then(function(data)
{
    console.log(data);
    var block = document.getElementById("block");
    var html = '';

    data.feelings.forEach(function(fl)
    {
      var user = users.find(function(user)
      {
        return fl.user_Id === user.id;
      });
      html += `<li>
         ${user.name}
         <img  src=${user.avatar} alt="">
         ${fl.comment}
      </li>`
    });
    block.innerHTML = html;
})
