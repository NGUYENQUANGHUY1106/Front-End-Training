// Dom Evevnts
// const Form = {
//   Input()
//   {
//     return <input/>
//   },
//   Checkbox () {
//   return <input type="checkbox"/>
//   }
// }
// Phân 2 
// function Button ({title,href,onClick})
// {
//   let Component = 'button';
//   const props ={className :"btn"};
//   if(href)
//   {
//     props.href = href;
//     Component = 'a';
//   }
//   if(onClick)
//   {
//     props.onClick = onClick;
//   }
//   console.log(props);
//   return (
//     <Component {...props}>{title}</Component>
//   )
// }
// function App ()
// {
//    return (
//     <div className ="wrapper">
//       <Button
//         title = "Click Me"
//         href = "https://www.facebook.com/"
//         onClick = {()=> console.log(Math.random())}
//       />

//     </div>
//    )
// }

  // Quy Tắc Đặt tên biến Component
  /**
   *  tên component phải bắt đầu bằng chữ viết hoa
   */
  // Phần 3
  // Children Props Render Props
  // cách chuyền props trong JSX
  /**
   * propsName1 ="String literals"
   * propsName2 = {expression}
   */
// cách 1 
  // function List ({data})
  // {
  //   return (
  //      data.map(item =><li key = {item}>{item}</li>)
  //   )
  // }

  // function App()
  // {
  //   const cars = ['BMW','HONDA','MAZDA']
  //   return (
  //     <div id ="wrapper">
  //      <List
  //       data={cars}
  //      />
  //     </div>
  //   )
  // }
  // ReactDOM.render(<App/>,document.getElementById('root'))
  // cách 2 
  function List ({data,children})
  {
    console.log(children);
    return (
      <ul>
        {data.map((item => children(item)))}
      </ul>
    )
  }

  function App()
  {
    const cars = ['BMW','HONDA','MAZDA']
    return (
      <div id ="wrapper">
       <List data={cars}>
        
        {(item) =><li>{item}</li>}
       </List>
      </div>
    )
  }
  ReactDOM.render(<App/>,document.getElementById('root'))