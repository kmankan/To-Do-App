import { useState } from 'react'
import MainDisplay from './components/MainDisplay'
import Input from './components/Input'
import './App.css'
import DisplayCompleted from './components/DisplayCompleted';

function App() {
  const [listItems, setListItems] = useState(['Get Groceries']);
  const [completedItems, setCompletedItems] = useState([''])

  return (
    <div className='listDisplay'>
      <MainDisplay 
      setListItems={setListItems} 
      listItems={listItems} 
      completedItems={completedItems} 
      setCompletedItems={setCompletedItems}/>

      <Input setListItems={setListItems} listItems={listItems}/>
      <DisplayCompleted completedItems={completedItems} />
    </div>
  )
}

export default App
