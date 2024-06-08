import { isCheckedHandler } from "../toDo/miscelleneous/SingeUseFunctions";

const idWithTaskAndStatus = {

}

const dateWithId = {

}

export const addTodo = async (id, input, date) => {

    const todo = {
        id: id,
        task: input,
        date: date,
        status: false
    }

    const stringy = JSON.stringify(todo);
    await fetch('http://localhost:8080/todo/add_todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringy
    })
        .then(data => console.log("todo added: ", data))
        .catch(err => console.log("Error adding todo: ", err));
    if (dateWithId[date] === undefined) {
        dateWithId[date] = [id]
    } else {
        dateWithId[date].push(id);
    }
    idWithTaskAndStatus[id] = { task: input, status: false };
}

export const isChecked = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/todo/isChecked/${id}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.log("Error in isChecked", err)
        return null;
    }
}

export const toggleTodoCheckBox = async (id) => {
    const checked = await isCheckedHandler(id);
    const json = { id: id, checked: !checked };
    const body = JSON.stringify(json);
    try {
        const response = await fetch(`http://localhost:8080/todo/toggleTodo`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        });

        if (response.status === 404) {
            console.log('Resource not found');
            return null;
        }

        if (!response.ok) {
            throw new Error("Response not ok int toggle request");
        }

        const data = await response.json();
        return data

    } catch (error) {
        console.log("from toggle todo : ",error);
    }
}

export const getTaskFromDate = async (date) => {
    // let todosForADay = {};
    // for (let index in dateWithId[date]) {
    //     let id = dateWithId[date][index];
    //     todosForADay[id] = idWithTaskAndStatus[id];
    // }
    // return todosForADay;

    let body = date
    try {
        const response = await fetch('http://localhost:8080/todo/getAllTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        });

        if (!response.ok) {
            throw new Error("Response is not ok in get task for date")
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.log("from getTaskFromDate", error);
    }
}

export const getTaskFromId = async (id) => {
    // let task = idWithTaskAndStatus[id]?.task;
    // return task;

    try {

        const response = await fetch(`http://localhost:8080/todo/getTaskId/${id}`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error("Response is not ok in get task from id");
        }

        const data = await response.text();
        return data;
    } catch (error) {
        console.log("error in getting task from ID", error);
    }
}

export const updateTodos = async (id, value) => {
    try {
        const response = await fetch(`http://localhost:8080/todo/updateTask/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: value
        });

        if (response.status == 404) {
            console.log('Resource not found');
            return null;
        }

        if (!response.ok) {
            throw new Error("Response not ok in updateTodos");
        }

        const data = await response.text();
        return data;
    } catch (err) {
        console.log("from updateTodos : ", err)
    }
}

export const deleteTodosFromDB = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/todo/deleteTodo/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok){
            throw new Error("Response is not ok in deleteTodo");
        }

        const data = await response.text();
        return data;
    } catch (err) {
        console.log("from delete todo : ", err)
    }
}
