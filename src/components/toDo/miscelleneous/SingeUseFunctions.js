
export const createUniqueId = () => {
    let id =  "id" + Math.random().toString(16).slice(2);
    console.log("id", id);
    return id;
}