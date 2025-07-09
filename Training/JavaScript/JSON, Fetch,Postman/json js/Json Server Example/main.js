var blockInfo = document.getElementById('info');
var infoAPi = 'http://localhost:3000/information';
function start ()
{
  getInfo(function(info)
  {
    console.log(info);
    renderInfo(info);

    handleInfo();
  })
}
start();

function getInfo(callback)
{
  fetch(infoAPi)
    .then(function(response)
    {
      return response.json()
    })
    .then(function(data)
    {
      callback(data)
    })
}

// hàm tạo thông tin mới 
 function createDataInfo(data,callback)
 {
  var options = {
    method : "POST",
    body : JSON.stringify(data)

  }
  fetch(infoAPi,options)
    .then(function(response)
    {
      return response.json()
    })
    .then(callback);
 }
// hiển thị thông tin ra bên ngoài 
function renderInfo(data)
{
  var html = data.map(function(index)
  {
    return `
    <li class ="id-Info-${index.id}">
    <p>Name : ${index.name}</p>
    <img src=${index.avatar} alt="">
    <div>
    <button onclick="deleteInfo('${index.id}')">Xóa</button>
    <button onclick="UpdateInfo('${index.id}','${index.name}','${index.avatar}')">Chỉnh sửa</button>

    
    </div>
    </li>
    `
  })
  blockInfo.innerHTML = html.join('')
}

// chỉnh sửa 
var idInfo = null
function UpdateInfo(id, name,avatar)
{
     idInfo = id;
    document.querySelector('input[name ="name"]').value = name ;
    document.querySelector('input[name = "avatar"]').value = avatar ;

    var btn_insert = document.getElementById('btn-insert');
    btn_insert.innerText = 'Update'
}
// form thêm thông tin
function handleInfo()
{
  var btn_insert = document.getElementById('btn-insert');

  btn_insert.onclick = function()
  {
    var name = document.querySelector('input[name ="name"]').value;
    var avatar = document.querySelector('input[name ="avatar"]').value;

    console.log(name,avatar);

    var dataCreateInfo = {
      name : name ,
      avatar : avatar
    }

    if(idInfo)
    {
      var updateInfo = {
        name : name ,
        avatar : avatar ,
      }
      updateInfos(idInfo,updateInfo,function()
      {
         getInfo(renderInfo);
         idInfo = null ;
         clearInput();
         btn_insert.innerText = 'Create'
      })
    } else{
      createDataInfo(dataCreateInfo,function()
      {
        getInfo(function(info)
        {
          renderInfo(info);
        })
      });
    }

  }

}

// cập nhật 

function updateInfos(id,data,callback)
{
  var options = {
    method : 'PATCH',
    body : JSON.stringify(data)
  }
  fetch(infoAPi + '/' + id , options)
    .then(function(response)
    {
       return response.json()
    })
    .then(callback);
}

/// xóa thông tin 
function deleteInfo(id)
{
  var options = {
    method : "DELETE",
  }
  fetch(infoAPi + '/' + id , options)
    .then(function(response)
    {
      return response.json()
    })
    .then(function()
    {
       var xoaID = document.querySelector('.id-Info-'+ id);
       xoaID.remove();
    })
}

function clearInput()
{
  document.querySelector('input[name = "name"]').value = '';
  document.querySelector('input[name ="avatar"]').value = '';
}