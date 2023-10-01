import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changTitleAction } from "../../redux/actions";

const MainPage = () => {

  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.titleReducer);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => dispatch(changTitleAction())}>change title</button>
    </div>
  );
};

export default MainPage;
