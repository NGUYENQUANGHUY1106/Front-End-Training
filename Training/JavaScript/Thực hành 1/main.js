const $ =document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// bind() là một phương thức có sẵn của hàm trong JavaScript. 
//Nó dùng để gắn cố định giá trị this khi gọi hàm.
// bind() tạo ra một bản sao của hàm, nhưng this bên trong hàm đó luôn được gắn
// cố định là đối tượng bạn chỉ định.
// .bind()	Tạo ra bản sao của hàm với this được cố định


const tabs = $$('.tab-item')
const panes = $$('.tab-pane');

console.log(tabs,panes);

const tabActive = $('.tab-item.active');
const line =$('.tabs .line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

console.log(line);

console.log(tabActive);
tabs.forEach((tab,index) =>
{
    const pane = panes[index]
    tab.onclick = function ()
    {
        console.log(pane);
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        console.log(this);

        
        this.classList.add('active');
        pane.classList.add('active');
        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';
    }
})
{

}