import React from "react";
import { useDispatch} from "react-redux";
import { log_out } from "../../../store/actions";

export const Profile = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(log_out())}>LOG OUT</button>
    </div>
  );
};
