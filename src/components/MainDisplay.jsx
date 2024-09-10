import DisplayList from './DisplayList';
import DisplayCompleted from './DisplayCompleted';

function MainDisplay({listItems, setListItems, completedItems, setCompletedItems}) {

  const removeItem = (removeIndex) => {
    const updatedList = listItems.filter((item, currentIndex) => currentIndex !== removeIndex);
    console.log(updatedList)
    setListItems(updatedList);
  }

  const addToCompletedList = (item) => {
    console.log(completedItems)
    const updateCompletedList = [...completedItems, item]
    setCompletedItems(updateCompletedList);
    const updateRunningList = listItems.filter((element) => element !== item);
    setListItems(updateRunningList);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <DisplayList listItems={listItems} removeItem={removeItem} addToCompletedList={addToCompletedList}/>
      </div>
    </div>
  )
}

export default MainDisplay;