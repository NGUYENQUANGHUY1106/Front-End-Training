function render(html) {
    var list = document.querySelector('ul');

    return list.innerHTML = html
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`)
