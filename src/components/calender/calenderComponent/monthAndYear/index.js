import React, { useState } from 'react'
import './index.scss'

function YearAndMonth({ currMonth, year, months, setMonth, setYear }) {

    const handleMonthChange = (event) => {
        const selected = event.target.value;
        const index = months.indexOf(selected);
        setMonth(index);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value)
    }

    const yearOptions = [];

    for (let i = 1900; i < 2200; i++) {
        yearOptions.push(
            <option value={i} key={i}>{i}</option>
        )
    }
    return (
        <>
            <div className='monthContainer'>
                <select value={months[currMonth]} onChange={handleMonthChange} className='selectMonth'>
                    <optgroup>
                        {months.map((month) => {
                            return <option value={month} key={month}>{
                                <div>{ month }</div>
                            }</option>
                        })}
                    </optgroup>
                </select>
            </div>

            <div className='yearContainer'>
                <select value={year} onChange={handleYearChange} className='selectYear'>
                    <optgroup>
                        {
                            yearOptions
                        }
                    </optgroup>

                </select>
            </div>
            {/* <h2>{year}</h2> */}
        </>
    )
}

export default YearAndMonth