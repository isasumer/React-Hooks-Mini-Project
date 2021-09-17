import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import List from "./components/List";
import fs from "./assets/fs_logo.png";
import aws from "./assets/aws_logo.png";
import axios from "axios";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState();
  const [studentList, setStudentList] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudentList(res.data));
  }, []);

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = (e) => {
    setSearch(text);
  };

  const filteredStudents = useMemo(()=> studentList.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  ), [search, studentList]);

  const add = useCallback(()=> {
    setStudentList([{id:studentList.length + 1, name :"isaac"},...studentList])
  },[studentList]);

  return (
    <div className="App">
      <Header img={img} />
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setImg(fs)}>FullStack</button>
      <button onClick={() => setImg(aws)}>AWS</button>
      <button onClick={() => setImg("")}>Reset</button>
      <hr />
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}> Search </button>
      <List students={filteredStudents} add ={add}/>
      
    </div>
  );
};
export default App;
