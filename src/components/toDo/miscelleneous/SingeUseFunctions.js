import { isChecked } from "../../dummyDB/db";

export const createUniqueId = () => {
    let id =  "id" + Math.random().toString(16).slice(2);
    return id;
}

export const isCheckedHandler = (id) => {
    let bool = false;
    try {
      isChecked(id).then(function (res) {
        bool = res;
      })
      console.log("inside isCheckedHanlder ", bool);
    } catch (err) {
      console.log("inside isCheckhandler", err);
    }
    return bool;
  }