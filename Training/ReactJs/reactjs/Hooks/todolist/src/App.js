
import './App.css';
import { useState } from 'react';

let id = 0;
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: id++, text: inputValue, complete: false }]);

      setInputValue("");
    }
  };
  const handleDelete = (id) => {
    const newTodo = todos.filter((value) => value.id !== id);
    setTodos(newTodo);
  };
  const handleCheckBox = (idCheckBox) => {
    const newTodo = todos.map((value) =>
      value.id === idCheckBox ? { ...value, complete: !value.complete } : value
    );

    setTodos(newTodo);
    // console.log(newTodo);
  };
  const taskComplete = todos.filter((t) => t.complete).length;

  console.log("task", taskComplete);
  //    console.log(taskComplete);
  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-group">
        <input
          value={inputValue}
          type="text"
          placeholder="Nhập việc cần làm..."
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>Thêm</button>
      </div>
     {todos.length === 0 ? (<p>Chưa có danh sách task nào</p>) :
     (todos.map((value) => (
        <ul
          key={value.id}
          style={{ display: "flex", justifyContent: "space-between"
        }}
        >
          <li
            style={{
              textDecoration: value.complete ? "line-through" : "none"
            }}
          >
            { value.text}
          </li>
          <button onClick={() => handleDelete(value.id)} className="delete-btn">
            Xóa
          </button>
          <input type="checkbox" onClick={() => handleCheckBox(value.id)} />
        </ul>
      )))
     
     } 

      <p>Tổng Số Tasks : {todos.length}</p>
      <p>Số Tasks đã hoàn thành : {taskComplete}</p>
      <p> Chưa Hoàn Thành : {todos.length - taskComplete}</p>
    </div>
  );
}

export default App;
