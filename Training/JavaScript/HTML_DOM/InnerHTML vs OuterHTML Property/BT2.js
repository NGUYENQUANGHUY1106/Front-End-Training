var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    
    var list = document.querySelector('.courses-list');

    list.innerHTML = courses.map(function(item)
    {
        return `<li> ${item}</li>`
    }).join("")
    
    
}

render(courses)

 