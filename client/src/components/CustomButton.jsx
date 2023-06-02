/* eslint-disable react/prop-types */

import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color === "#ffffff" ? "#000" : snap.color,
        color: "#fff",
      };
    } else if (type === "") {
      return { backgroundColor: "", color: "" };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick = {handleClick}
    >
      {title}
      {console.log(customStyles)}
    </button>
  );
};

export default CustomButton;
