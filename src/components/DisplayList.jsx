function DisplayList({ listItems, removeItem, addToCompletedList }) {
  return (
    listItems.map((item, index) => {
      return (
        <ul key={index}>
          <li >{item}</li>
          <button id="completedItem" onClick={() => addToCompletedList(item)}>✅</button>
          <button id="deleteItem" onClick={() => removeItem(index)}>❌</button>
        </ul>
      );
    })
  )
}

export default DisplayList