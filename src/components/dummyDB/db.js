const dateWithTodo = {
    "May 11 2024": {
        1: true,
        2: false
    }, "May 12 2024": {
        1: true,
        2: true,
        3: true,
        4: true
    }
}

export const getTaskFromDate = (date) => {
    debugger;
    return dateWithTodo[date];
}

export const setDayTasks = (input, date) => {
    dateWithTodo[date] = {...dateWithTodo[date], [input]:false}
}

export const setDayTasksStatus = (input, date, status) => {
    debugger
    dateWithTodo[date][input] = status; 
}
