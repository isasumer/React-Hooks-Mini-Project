import React,{useState, useEffect, useMemo, useCallback} from "react";
import Header from "./components/Header";
import List from "./components/List";
import fs from "./assets/fs_logo.png";
import aws from "./assets/aws_logo.png";
import cw from "./assets/cw.png";


const App = () => {
  const [counter, setCounter] = useState (0);
  const [img, setImg] = useState();
  return (
    <div className="App">
      <Header img={img}/>
      <p>Counter: {counter}</p>
      <button onClick ={()=> setCounter(counter+1)}>Increase</button>
      <button onClick ={()=> setImg(fs)}>FullStack</button>
      <button onClick ={()=> setImg(aws)}>AWS</button>
      <button onClick ={()=> setImg("")}>Reset</button>
    </div>
  )
}
export default App;
