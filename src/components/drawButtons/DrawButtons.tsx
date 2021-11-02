import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesList } from '../../redux/correncyAction';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../drawButtons/drawButtons.css'

export const DrawButtons = () => {
    const dispatch = useDispatch()
    let categoriesList = useSelector((state: any) => state.categories)
    const isTableActive = (category: any, index: number) => {
        categoriesList = [...categoriesList]
        categoriesList[index].isActive = !category.isActive
        dispatch(setCategoriesList(categoriesList))

    }

    return (
        <div className='container'>

            {categoriesList.map((category: any, index: number) => {

                return (<Stack key={index} spacing={2} direction="row">
                    <Button style={category.isActive ? { backgroundColor: "rgb(0, 30, 128)" } : { backgroundColor: "grey" }}
                        variant="contained" id='btn-category' onClick={() => isTableActive(category, index)}>{category.name}</Button>
                </Stack>)


            })}

        </div>
    )
}
