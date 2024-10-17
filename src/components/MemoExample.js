import React, { useMemo, useState } from 'react'

function MemoExample() {
  const [numbar, setnumbar] = useState(0)
  const [text, settext] = useState("user")
  const hndleIncrement = () => {
    setnumbar(numbar + 1)
  }

  const hanldeText = () => {
    settext("ABC")
  }
  const calc = (num) => {
    for (let index = 0; index < 1000000000; index++) {
    }
    return num;
  }
  const num = useMemo(() => {
    return calc(numbar)

  }, [numbar])
  return (
    <div>
      <button onClick={() => hndleIncrement()}>+</button>
      <h1>{numbar}</h1>
      <button onClick={() => hanldeText()}>Clike Me</button>
      <h1>{text}</h1>
    </div>
  )
}

export default MemoExample
