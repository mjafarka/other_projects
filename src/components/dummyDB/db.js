const idWithTaskAndStatus = {

}

const dateWithId = {

}

export const addTodo = (id, input, date) => {

    const todo = {
        id: id,
        task: input,
        date: date,
        status: false
    }

    const stringy = JSON.stringify(todo);
    fetch('http://localhost:8080/todo/add_todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringy
    })
        // .then(response => response.json())
        .then(data => console.log("todo added: ", data))
        .catch(err => console.log("Error adding todo: ", err));
    if (dateWithId[date] === undefined) {
        dateWithId[date] = [id]
    } else {
        dateWithId[date].push(id);
    }
    idWithTaskAndStatus[id] = { task: input, status: false };
}

// export const isChecked = (id) => {
//     let checked;
//     fetch(`http://localhost:8080/todo/isChecked/${id}`, {
//         method: 'GET',
//     })
//         // .then(response => response.text)
//         .then(data => console.log("data - ",data))
//         .catch(err => console.log("Error in checking isChecked", err));
//     return checked;
// }

export const isChecked = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/todo/isChecked/${id}`,{
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("data - ", data);
        return data;
    } catch (err) {
        console.log("Error in isChecked", err) 
        return null;
    }
}

export const toggleTodoCheckBox = (id) => {
    let checked = idWithTaskAndStatus[id].status;
    idWithTaskAndStatus[id] = { ...idWithTaskAndStatus[id], status: !checked }
}

export const getTaskFromDate = (date) => {
    let todosForADay = {};
    for (let index in dateWithId[date]) {
        let id = dateWithId[date][index];
        todosForADay[id] = idWithTaskAndStatus[id];
    }
    return todosForADay;
}

export const getTaskFromId = (id) => {
    let task = idWithTaskAndStatus[id]?.task;
    return task;
}

export const updateTodos = (id, value) => {
    idWithTaskAndStatus[id] = { ...idWithTaskAndStatus[id], task: value };
}

export const deleteTodosFromDB = (id, date) => {
    delete idWithTaskAndStatus[id];
    let index = dateWithId[date].indexOf(id); //index of id in date table
    if (index > -1) {
        dateWithId[date].splice(index, 1);  //1 means only remove one element
    }
}
