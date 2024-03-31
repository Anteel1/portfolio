// components/TextAreaAndButton.js
"use client"
import React, { useState } from 'react';
export function TextAreaAndButton({type}:{type? : string}) {
  const [inputText, setInputText] = useState('');

  const handleChange = (e : any) => {
    setInputText(e.target.value);
  };

  const handleSubmit =async () => {
    if(type != 'input'){
        var copyText = (document.getElementById('myTextArea') as HTMLInputElement).value
        navigator.clipboard.writeText(copyText);
        (document.getElementById('result') as HTMLParagraphElement).innerText = 'Copied'
        setTimeout(()=>
          (document.getElementById('result') as HTMLParagraphElement).innerText = ''
        ,3000)
    }else{
        console.log(inputText)
    } 
    // You can perform further actions with the submitted text here
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <label htmlFor="myTextArea" className="block text-gray-700 text-sm font-bold mb-2">
        {type == 'input' ? 'Enter Text:' : 'Your email is:'}
      </label>
      <textarea
        id="myTextArea"
        className="resize-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={inputText}
        onChange={handleChange}
      ></textarea>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSubmit}
      >
        {type == 'input' ? 'Submit' : 'Copy'}
      </button>
      <p style={{color:'green'}} id={type == 'input' ? '' : 'result'}></p>
    </div>
  );
};

export default TextAreaAndButton;
