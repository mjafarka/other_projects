import React, { useState } from 'react'
import './index.scss'

function YearAndMonth({ currMonth, year, months, setMonth, setYear }) {

    const handleMonthChange = (event) => {
        const selected = event.target.value;
        const index = months.indexOf(selected);
        setMonth(index);
    }
    return (
        <>
            {/* <h2>{months[month].toUpperCase()}</h2> */}
            {/* <p>{months}</p> */}
            <div className='monthContainer'>
                <select value={months[currMonth]} onChange={handleMonthChange} className='selectMonth'>
                    <optgroup>
                        {months.map((month) => {
                            return <option value={month} key={month}>{
                                <h2 className='currMonth'>{month}</h2>
                            }</option>
                        })}
                    </optgroup>
                </select>
            </div>
            <h2>{year}</h2>
        </>
    )
}

export default YearAndMonth