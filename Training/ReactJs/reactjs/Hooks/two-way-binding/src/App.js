
import './App.css';
import { useState } from 'react';
// RANDOM PHẦN THƯỞNG
// const gifts = [
//   'CPU i9',
//   'RAM 32GB',
//   'RGB Keyboard'
// ]
// const [gift,setGift] = useState();

//   const randomGift = () =>
//   {
//     const index = Math.floor(Math.random() * gifts.length);
//     console.log(gifts[index]);
//     setGift(gifts[index])
//   }
//   return (
//     <div className="App" style ={{padding: 20}}>
//       <h1>{gift || 'Chưa Có Phần Thưởng'}</h1>
//       <button onClick={randomGift}>Lấy Thưởng</button>
      
//     </div>
//   );
// TWO WAY BINDING
// const [name,setName] = useState('');
// const [email,setEmail] = useState('')
//  const handleSubmit = ()=>
//  {
//    console.log({
//     name,
//     email
//    });
//  }
// return (
//   <div className="App" style ={{padding: 20}}>
//     <input
//     value={name}
//     onChange={e => setName(e.target.value)}
//     />

//     <input
//     value={email}
//     onChange={e => setEmail(e.target.value)}
//     />
//     <button onClick={handleSubmit}>Submit</button>
// RADIO
// const [checked,setChecked] = useState(2);
// console.log(checked);
//  const handleSubmit = ()=>
//  {
//     console.log({id : checked});
//  }
// return (
//   <div className="App" style ={{padding: 20}}>
//     {courses.map(course =>
//       (
//         <div key={course.id}>
//           <input type= "radio" name='course'
//             onChange={()=> setChecked(course.id)}
//             checked = {checked === course.id}
//           />
//           {course.name}
//         </div>
//       ))}
//     <button onClick={handleSubmit}>Submit</button>
    
//   </div>

const courses = [
  {
    id :1 ,
    name : 'HTML,CSS'
  },
  {
    id:2 ,
    name : 'Javascript'
  },
  {
    id:3,
    name : 'ReactJS'
  }
]
function App() {
  const [checked,setChecked] = useState([]);
  console.log(checked);
   const handleSubmit = ()=>
   {
      console.log({id : checked});
   }
   const handleCheck =(id)=>
   {
     setChecked(prev =>
      {
        const isChecked = checked.includes(id)
     if(isChecked)
     {
        return checked.filter(item => item!== id)
     }
     else{
      return [...prev,id] 
     }
      })
   }
  return (
    <div className="App" style ={{padding: 20}}>
      {courses.map(course =>
        (
          <div key={course.id}>
            <input type= "checkbox" name='course'
              onChange={()=>handleCheck(course.id)}
              checked = {checked.includes(course.id)}
            />
            {course.name}
          </div>
        ))}
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  );
}

export default App;
