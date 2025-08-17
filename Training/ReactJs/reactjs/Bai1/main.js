// Github , NPMJS nơi lưu trử mã nguồn , UNPKG
// Add reactjs to website
// Official docs
// const h1 = document.createElement('h1');
// h1.title = 'Hello';
// h1.className  = 'heading';
// h1.innerText = 'Hello guys'

// document.body.appendChild(h1);

// // reactjs
// //React.createElement(type,props,children,n)
// const h1React = React.createElement('h1',
// {
//     title :'Hello',
//     className : 'heading'
// },'Hello guys !');

// console.dir(h1);
// console.log(h1React);

// Dom
const ulDom = document.createElement("ul");
const liDom = document.createElement("li");
const liDom2 = document.createElement("li");
ulDom.id = "ul-id";
ulDom.style.color = "red";
liDom.innerText = "Javascript";
liDom2.innerText = "ReactJS";

ulDom.appendChild(liDom);
ulDom.appendChild(liDom2);

document.body.appendChild(ulDom);

const ulReact = React.createElement(
  "ul",
  {
    id: "ul-React",
    style: "color :red",
  },
  React.createElement("li", null, "JavaScript"),
  React.createElement("li", null, "ReactJS")
);

console.dir(ulDom);
console.log(ulReact);

// Dom

const divDom = document.createElement("div");
const h2Dom = document.createElement("h2");
const pDom = document.createElement("p");

divDom.className = "post-item";
h2Dom.title = "Học React tại F8";
h2Dom.innerText = "Học ReactJS";
pDom.innerText = "Học ReactJS  từ cơ bản tới nâng cao";

divDom.appendChild(h2Dom);
divDom.appendChild(pDom);

document.body.appendChild(divDom);

// React

const divReact = React.createElement(
  "div",
  {
    className: "post-item",
  },
  React.createElement(
    "h2",
    {
      title: "Học React tại F8",
    },
    "Học ReactJS"
  ),
  React.createElement("p", {}, "Học ReactJS từ cơ bản đến nâng cao")
);

console.dir(divDom);
console.log(divReact);
