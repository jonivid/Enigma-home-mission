import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../src/data.json'
import { DrawButtons } from './components/drawButtons/DrawButtons';
import { DrawTable } from './components/drawTable/DrawTable';
import { getAllCorrencies, setCategoriesList } from './redux/correncyAction';

function App() {
  const dispatch = useDispatch()
  // dispatch(getAllCorrencies(data.data))
  const correncies = useSelector((state: any) => state.correncies)
  let categoryList = Array.from(new Set(correncies.map((c: any) => {
    return c.category
  })))
  categoryList = categoryList.map((category: any) => {
    return category = { name: category, isActive: true }
  })
  // dispatch(setCategoriesList(categoryList))

  useEffect(() => {
    dispatch(getAllCorrencies(data.data))
  }, [correncies]);

  useEffect(() => {
    dispatch(setCategoriesList(categoryList))
  }, [categoryList]);

  return (
    <div className="App">
      <DrawButtons />
      <DrawTable />
    </div>
  );
}

export default App;
