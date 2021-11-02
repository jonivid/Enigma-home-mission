import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../src/data.json'
import { DrawButtons } from './components/drawButtons/DrawButtons';
import { DrawTable } from './components/drawTable/DrawTable';
import { getAllCurrencies, setCategoriesList } from './redux/currencyAction';

function App() {
  const dispatch = useDispatch()
  // dispatch(getAllCorrencies(data.data))
  const currencies = useSelector((state: any) => state.currencies)
  let categoryList = Array.from(new Set(currencies.map((c: any) => {
    return c.category
  })))
  categoryList = categoryList.map((category: any) => {
    return category = { name: category, isActive: true }
  })
  // dispatch(setCategoriesList(categoryList))

  useEffect(() => {
    dispatch(getAllCurrencies(data.data))
  }, [currencies]);

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
