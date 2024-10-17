import React, { useRef, useState } from 'react'

function RefExample() {
    const inputRef = useRef()
    const countRef = useRef(0)
    const [number, setNumbar] = useState(0)

    const handleRef = () => {
        inputRef.current.focus()
        inputRef.current.style.color = "red"
    }
    const handleIncrement = () => {
        setNumbar(number + 1)
        console.log(number, "state");
        countRef.current++
        console.log(countRef.current, "red")
    }
    return (
        <div>
            <div>
                <label for="fname">First Name</label>
                <input type='text' ref={inputRef} id='fname' name='fname' placeholder='enter fist name' />
                <button type='button' onClick={() => handleRef()}>submit</button><br></br>
                <button type='button' onClick={() => handleIncrement()}>+</button>
                <h1>{number}</h1>
            </div>
        </div>
    )
}

export default RefExample
