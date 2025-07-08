// FETCH
// API(URL) application programing interface
// cổng giao tiếp giữa các PM

// backend -> API ->Fetch ->JSON/XML
//->JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

var postAPI = 
    'https://jsonplaceholder.typicode.com/posts'
// fetch nhận được một promise render lại
// fetch trả về một stream một cái luồng dữ liệu 
fetch(postAPI)
    .then(function(reponse)
    {
       return reponse.json();
       //.json() === JSON.parse :  JSON -> Javascript type
    })
    .then(function(pots)
    {
        console.log(pots);
        var htmls = pots.map(function(pots)
        {
            return `<li>
               <h2> Title : ${pots.title}</h2>
               <p> Body : ${pots.body}</p>
                
            </li>
            `
        })
        var html = htmls.join('');
        document.getElementById("block").innerHTML = html
    })
    .catch(function(err)
    {
        alert('Có lỗi ', err)
    })