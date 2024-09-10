function DisplayCompleted({completedItems}) {
  
  const showCompleted = () => {
      return (
        completedItems.map((item, index) => {
          return (
            <ul key={index}>
              <li ><s>{item}</s></li>
            </ul>
          );
        })
      )
    }

  return (
    <div>
       <h2>Completed</h2>
       {showCompleted()}
    </div>
  )
}

export default DisplayCompleted;