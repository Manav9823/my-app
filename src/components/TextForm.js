import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter your text here please')
    const listenOnChange = (event) =>{
        console.log('Listening On change')
        setText(event.target.value)
    }
    const listenOnClick = () =>{
        console.log('Listening on click' + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const listenOnClickLowercase = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const listenOnClickClear = () => {
        let newText = ''
        setText(newText)
    }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange = { listenOnChange }></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick = { listenOnClick } >Convert to UpperCase</button>
      <button className='btn btn-primary mx-1' onClick = { listenOnClickLowercase } >Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick = { listenOnClickClear } >Clear text</button>
      <div className='container'>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} letters in the summary</p>
        <p>{0.008*text.split(" ").length} time to read the paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
