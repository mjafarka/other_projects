import { isChecked } from "../../dummyDB/db";

export const createUniqueId = () => {
    let id =  "id" + Math.random().toString(16).slice(2);
    return id;
}

export const isCheckedHandler = async (id) => {
    let bool = false;
    try {
      await isChecked(id).then(function (res) {
        bool = res;
      })
    } catch (err) {
      console.log("inside isCheckhandler", err);
    }
    return bool;
  }