import React, { useState } from 'react';
const Description = () => {
    const [text, setText] = useState('Click "Type text" to change the value.');

  const changeText = () => {
    const newText = prompt('Enter the new text:');
    setText(newText);
  };
    return ( 
        <>
         <div>
      <div>{text}</div>
      <button onClick={changeText}>Type text</button>
    </div>
        </>
     );
}
 
export default Description;