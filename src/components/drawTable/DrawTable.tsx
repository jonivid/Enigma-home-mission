import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; import { useDispatch, useSelector } from 'react-redux'
import { getAllCurrencies } from '../../redux/currencyAction';
import StarIcon from '@mui/icons-material/Star';
import { grey, yellow } from '@mui/material/colors';

export const DrawTable = () => {
    const dispatch = useDispatch()
    const categoriesList = useSelector((state: any) => state.categories)
    let currencies = useSelector((state: any) => state.currencies)

    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    function abbreviateNumber(number: number) {
        var tier = Math.log10(Math.abs(number)) / 3 | 0;
        if (tier === 0) return number;
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
        var scaled = number / scale;
        return scaled.toFixed(1) + suffix;
    }

    const toggleStar = (row: any) => {
        const index = currencies.findIndex((currency: any) =>
            (currency.name === row.name)
        );
        currencies = [...currencies]
        currencies[index].isStarOn = !currencies[index].isStarOn
        dispatch(getAllCurrencies(currencies))

    }

    return (
        <div>
            {categoriesList.map((category: any, index: number) => {
                const list = currencies.filter((currency: any) => currency.category === category.name && category.isActive)
                return (
                    <>{category.isActive ? <h1>{category.name}</h1> : null}
                        <TableContainer component={Paper} style={{ backgroundColor: "black" }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                <TableBody >
                                    {list.map((row: any, index: number) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row" style={{ color: "white" }}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right" style={{ color: "white" }}>{row.value}</TableCell>
                                            <TableCell align="right" style={row.change >= 0 ? { color: "green" } : { color: "red" }}>{row.change}%</TableCell>
                                            <TableCell align="right" style={{ color: "white" }}>{abbreviateNumber(row.amount)}</TableCell>
                                            <TableCell align="right" id='svg-star' onClick={() => toggleStar(row)}>
                                                <StarIcon sx={row.isStarOn ? { color: yellow[500] } : { color: grey[500] }} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer></>
                )
            })
            }
        </div >
    )
}
