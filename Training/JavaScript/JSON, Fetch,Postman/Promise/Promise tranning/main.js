var users = [
  {
    id: 1,
    name: "Quang Huy",
    avatar:
      "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/460829950_541729705203751_7224237164549217634_n.jpg?stp=c0.0.807.807a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_ohc=mKD0qUYsu2MQ7kNvwFrIuU4&_nc_oc=AdkpWdcd4lAxdvcFojbI22hAoHTb9Sy_DQkuy2PaSGMH-_Lw_qcUxMh2x3S-Hh4yM7yw3RfwoleTmB5XtiK3h8_v&_nc_zt=24&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=oaiOhpfottsrFa3zrSVxQA&oh=00_AfSU18jsRXV61AWHqnZu6N2jq-GDrr1TwRFdi1hNWJhAyg&oe=687054DB",
  },
  {
    id: 2,
    name: "Thiên Trang",
    avatar:
      "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/494524369_1049340360584256_4773018109661286093_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=NCjZALAZfb8Q7kNvwES1sIn&_nc_oc=AdmtMyYksEMxV79rF2MLARHpVb74htsT5ylktGQ2jrnjTvwyTn3gQ8gGMHF9wOW7MgXMrMVSgoUL7N1MZja-ifOj&_nc_zt=24&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ZQCxH-Kt1mMxTGlWm-BbIA&oh=00_AfT6uVtab94rHPlPGR2WcC3U0OJ-lVvniWrFd08xsVQZVw&oe=68707BDE",
  },
  {
    id: 3,
    name: "Manchester United",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNgZni2mI_01FmZlNGWs57r0Lc1JRwPOCHg&s",
  },
];
var feedBack = [
  {
    id: 1,
    user_Id: 1,
    feedBack: "Dịch Vụ ok",
  },
  {
    id: 2,
    user_Id: 2,
    feedBack: "Phản hồi nhanh tốt ",
  },
  {
    id: 3,
    user_Id: 3,
    feedBack: "Hài Lòng về mọi thứ ",
  },
];

function getFeedBack() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(feedBack);
    }, 1000);
  });
}

function getUsersById(userIdFb) {
  return new Promise(function (resolve) {
    var result = users.filter(function (index) {
      return userIdFb.includes(index.id);
    });

    resolve(result);

    console.log(result);
  });
}


getFeedBack().then(function (fb) {
  console.log(fb);
  var userIdFb = fb.map(function (id) {
    return id.user_Id;
  });  
  console.log(userIdFb);

  return getUsersById(userIdFb)
    .then(function(user)
    { 
        return {
          users : user ,
         feedBack : fb 
        }
    })
})
.then(function(data)
{
  console.log(data);
  var block = document .getElementById("box");
  var html =  '';

  data.feedBack.forEach(function(fb)
  {
    var user = data.users.find(function(user)
    {
      return user.id ===  fb.user_Id;
    });
    console.log(user);
    console.log(fb.feedBack);
    html += `<li>
      ${user.name} :
      <img src=${user.avatar} alt=""> :
      ${fb.feedBack}

    </li>`

  });
  block.innerHTML = html
})

