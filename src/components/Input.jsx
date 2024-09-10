import { useState } from "react"

function Input({listItems, setListItems}) {
  const [inputText, setInputText] = useState('')

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const addToList = () => {
    const updatedList = [...listItems, inputText]
    setListItems(updatedList)
  }

  return (
    <div>
      <input type="text" className="inputBox" onChange={handleChange} value={inputText}></input>
      <button onClick={addToList}>add</button>
    </div>
  )

}

export default Input;