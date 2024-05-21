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

const idWithTaskAndStatus = {

}

const dateWithId = {
    
}

export const addTodo = (id, input, date) => {
    console.log("input = ", input, " id = ", id);
    if (dateWithId[date] === undefined) {
        dateWithId[date] = [id]
    } else {
        dateWithId[date].push(id);
    }
    idWithTaskAndStatus[id] = {task: input, status: false};
}

export const isChecked = (id) => {
    return idWithTaskAndStatus[id]?.status;
}

export const toggleTodoCheckBox = (id) => {
    let checked = idWithTaskAndStatus[id].status;
    idWithTaskAndStatus[id] = {...idWithTaskAndStatus[id], status : !checked}
}

export const getTaskFromDate = (date) => {
    let todosForADay = {};
    for (let index in dateWithId[date]) {
        let id = dateWithId[date][index];
        console.log(id);
        todosForADay[id] = idWithTaskAndStatus[id];
    }
    return todosForADay;
}

export const getTaskFromId = (id) => {
    let task = idWithTaskAndStatus[id]?.task;
    return task;
}

// export const getTaskFromDate = (date) => {
//     debugger;
//     return dateWithTodo[date];
// }

// export const setDayTasks = (input, date) => {
//     dateWithTodo[date] = {...dateWithTodo[date], [input]:false}
// }

// export const setDayTasksStatus = (input, date, status) => {
//     debugger
//     dateWithTodo[date][input] = status; 
// }
