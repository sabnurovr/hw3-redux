import { types } from "./types";

export function changTitleAction() {
  return {
    type: types.CHANGE_TITLE,
  };
}

export function asyncFunctionAction() {
  return function (dispatch) {
    setTimeout(() => {
      alert("bannnnnkai");
    }, 2000);
  };
}

function getUsersAction(users) {
  return {
    type: types.USERS,
    payload: users,
  };
}

export function fetchUsersAction() {
  return async function (dispatch) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch(getUsersAction(data));
  };
}

export function fetchUserOneInfo(id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        // Добавляем экшен для сохранения данных о пользователе в Redux
        dispatch(setUserOneInfo(data));
    }
}


export function setUserOneInfo(user) {
    return {
        type: types.SET_USER_ONE_INFO,
        payload: user,
    };
}


