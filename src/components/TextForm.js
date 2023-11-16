import React, { useState } from 'react'        //React Function based (rfc)


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was cliked" + text);
        let newText = text.toUpperCase();
        // setText("You have enter button without any Text") 
        setText(newText)
        props.showAlert("Converted to uppercase", "Success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerercase", "Success");
    }
    const handleClearClick = () => {
        let newText = ' ';
        setText(newText)
        props.showAlert("Text Cleared", "Success");
    }
    const handleCopy = () => {
        // var text = document.getElementById("myBox")
        // text.select();
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard", "Success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "Success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    // setText("new text");  //correct way to change the state    
    // text="new text";   //Wrong way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {/* <div className="mb-3">
                    <h2>Enter Your Name</h2>
                    <input type="text" className="form-control" id="myDiv" placeholder="Enter Your Name" />
                </div> */}

                <h2 className='mb-4 my-2'>{props.heading}</h2>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '' : 'white' }} id="myBox" rows="10"></textarea>

                </div> 
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert 
                 to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert
                 to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
                    Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
                    Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
                    Remove Space</button>
            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{(0.0008) * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
                <h3>Preview Your Text</h3>
                <p>{text.length > 0 ? text : "Nothing to preview "}</p>
            </div>


        </>
    )
}
