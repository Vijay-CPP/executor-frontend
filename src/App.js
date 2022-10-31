import { useState } from 'react';
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar"
import './App.css';

function App() {

  let [op, setOp] = useState("");
  let [mem, setMem] = useState("0");
  let [time, setTime] = useState("0");

  function clickie() {
    let code = document.getElementsByClassName("code-textarea")[0].value;
    let details = document.getElementsByClassName("code-select")[0].value;
    let input = document.getElementsByClassName("inp-textarea")[0].value;

    if(details === "")
    {
      alert("Kindly select your language!")
      return;
    }

    let detailArray = details.split(" ");

    code.replaceAll('"', '/"');
    code.replaceAll("'", "/'");

    let obj =
    {
      script: code,
      stdin: input,
      language: detailArray[0],
      versionIndex: detailArray[1]
    }
    console.log(details, detailArray);

    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    };

    fetch("http://localhost:9000/", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setOp(data.output)
        setMem(data.memory)
        setTime(data.cpuTime)
      });
  }

  return (
    <div className="App">
      <Navbar/>
      <Body run={clickie} info={[op, mem, time]} />
    </div>
  );
}

export default App;
