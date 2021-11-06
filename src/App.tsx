import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../src/data.json'
import { DrawButtons } from './components/drawButtons/DrawButtons';
import { DrawTable } from './components/drawTable/DrawTable';
import { getAllCurrencies, setCategoriesList } from './redux/currencyAction';

function App() {
  const [serachResult, setSerachResult] = useState(data.data)
  const dispatch = useDispatch()
  const currencies = useSelector((state: any) => state.currencies)
  let categoryList = Array.from(new Set(currencies.map((c: any) => {
    return c.category
  })))
  categoryList = categoryList.map((category: any) => {
    return category = { name: category, isActive: true }
  })

  const onSearchValueChange = (event: any) => {
    const filteredCurrencies: any = (data.data.filter((currency) => currency.name.toLowerCase().includes(event.target.value.toLowerCase())))
    setSerachResult(filteredCurrencies)
  }
  // dispatch(getAllCorrencies(data.data))
  // dispatch(setCategoriesList(categoryList))

  useEffect(() => {
    dispatch(getAllCurrencies(serachResult))
  }, [serachResult]);

  useEffect(() => {
    dispatch(setCategoriesList(categoryList))
  }, [categoryList]);

  return (
    <div className="App">

      <DrawButtons />
      <input type="text" placeholder='Search by name....' onChange={onSearchValueChange} />
      <DrawTable />
    </div>
  );
}

export default App;
