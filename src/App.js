
import './App.css';
import Element from './Element';

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("Title");
  const [showInputEle, setShowInputEle] = useState(true);
  return (
    <div className="App">
           <h1>Double-click the Full Name's Value to Edit</h1>
    <div>
       <strong>Full Name: </strong>
    <Element
     value={fullName}
     handleChange={(e) => setFullName(e.target.value)}
     handleDoubleClick={() => setShowInputEle(false)}
     handleBlur={() => setShowInputEle(false)}
     showInputEle={showInputEle}/>
     </div>
    </div>
  );
}

export default App;
