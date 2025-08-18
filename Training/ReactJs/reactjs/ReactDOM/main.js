// tại sao phải dùng reactjs dom là cầu nối dữ cầu nối và dom tạo ra reatjs và thêm vào dom
// tại sao lại tách react-dom
// render UI

const postItem = React.createElement(
  "div",
  {
    className: "post-item",
  },
  React.createElement("h2", { title: "Học React F8" }, "Học React "),
  React.createElement("p", {}, "Học ReactJS từ cơ bản đến nâng cao ")
);

const h1 = React.createElement(
  "h1",
  {
    title: "Hello",
    className: "heading",
  },
  "Hello guys"
);
const ul = React.createElement(
  "ul",
  {},
  React.createElement("li", {}, "Javascript"),
  React.createElement("li", {}, "ReactJS")
);
// get rootElement
const container = document.getElementById("root");
//ReactJS 17
// react-Dom render UI
//render(element(React-element),container(root-element),callback)
const ReactJs = React.createElement("div", {}, h1, ul, postItem);
// ReactDOM.render(ReactJs, root);

//ReactJS 18

const root = ReactDOM.createRoot(container);
root.render(ReactJs)

//React.Fragment