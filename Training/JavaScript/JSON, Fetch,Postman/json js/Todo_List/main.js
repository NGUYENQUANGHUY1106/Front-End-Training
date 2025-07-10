var todo_listAPi = 'http://localhost:3000/todo_List';

function start()
{
  getTodo(function(data)
  {
    console.log(data);
    rederTodolist(data) ;

    handleTodolist()
  });
  
}
start();

function getTodo (callback)
{
    fetch(todo_listAPi)
    .then(function (response)
    {
        return response.json()
    })
    .then(function(data)
    {
        callback(data)
    })
}

function createTodolist(data,callback)
{
    var options = {
        method : 'POST',
        body : JSON.stringify(data)
    }
    fetch(todo_listAPi,options)
        .then(function(reponse)
        {
            return reponse,json();
        })
            .then(callback);
}
function rederTodolist(data)
{
    var block_list = document.getElementById('list-todo');
  var html = data.map(function(index)
  {
    return `
    <li class="Id-todo-list-${index.id}">
    <img src=${index.avatar} alt="">
    <h4>Name :${index.name}</h4>
    <p>Thời Gian : ${index.time}</p>
    <p>Nhiệm Vụ : ${index.mission}</p>
    <p>Trạng Thái : ${index.status}</p>
    <div>
    <button onclick="deleteTodoList('${index.id}')" class ="delete">Xóa</button>
    <button onclick="getInfoTo('${index.id}','${index.name}','${index.time}','${index.avatar}','${index.mission}','${index.status}')" class="update">Chỉnh sửa</button>
    </div>
    <hr>
    </li>
    
    `
  })
  block_list.innerHTML = html.join('');
}
function handleTodolist ()
{
    var btn_create = document.getElementById('btn_create_todo');
    console.log(btn_create);
    btn_create.onclick = function()
    {
        var name = document.querySelector('input[name ="name"]').value;
        var time = document.querySelector('input[name ="time"]').value;
        var mission = document.querySelector('input[name ="mission"]').value;
        var avatar = document.querySelector('input[name ="avatar"]').value;
        var status = document.querySelector('input[name ="status"]').value;

        console.log(name,time,mission,avatar,status);

        var dataTodo = {
            name : name ,
            time : time ,
            mission : mission ,
            avatar : avatar ,
            status : status
        };



        if(idTodo)
        {
           var dataUpdate = {
            name : name ,
            time : time ,
            mission : mission ,
            avatar : avatar ,
            status : status
           }

           updateTodoList(idTodo,dataUpdate,function()
           {
             getInfoTo(rederTodolist);
             idTodo = null ;
             clearInput();
             btn_create.innerText = 'Create';
           })
        }
        else
        {
            createTodolist(dataTodo,function()
            {
                getTodo(function(data)
                {
                    rederTodolist(data)
                });
            })
        }

    }
}

function deleteTodoList(id)
{
   var options = {
    method :'DELETE'
   }
   fetch(todo_listAPi + '/' +id,options)
    .then(function(response)
    {
        return response.json();
    })
    .then(function()
    {
     var xoa = document.querySelector('.Id-todo-list-' + id);

     xoa.remove();
    })
}
var idTodo = null
function getInfoTo(id,name,time,avatar,mission,status)
{
    console.log(id,name,time,avatar,mission,status);
        idTodo = id;
           document.querySelector('input[name ="name"]').value = name;
           document.querySelector('input[name ="time"]').value = time ;
           document.querySelector('input[name ="mission"]').value = avatar;
           document.querySelector('input[name ="avatar"]').value = mission ;
           document.querySelector('input[name ="status"]').value = status;

           var btn_create = document.getElementById('btn_create_todo');
           btn_create.innerText = 'Update'
}

function updateTodoList(id,data,callback)
{
    var options = {
        method : 'PATCH',
        body : JSON.stringify(data)
    }
    fetch(todo_listAPi + '/' + id ,options)
        .then(function(reponse)
        {
            return reponse.json()
        })
        .then(callback);
}

function clearInput()
{
    document.querySelector('input[name ="name"]').value = '';
    document.querySelector('input[name ="time"]').value = '' ;
    document.querySelector('input[name ="mission"]').value = '';
    document.querySelector('input[name ="avatar"]').value = '' ;
    document.querySelector('input[name ="status"]').value = '';

}