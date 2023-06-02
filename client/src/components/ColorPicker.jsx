import { CirclePicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const presetColors = [
    "#ffffff",
    "#ACB1A6",
    "#EF6024",
    "#6C6A6B",
    " #6C6864",
    "#255fa3",
    "#9c071a",
    "#2D2926",
    "#1A1F35"
  ]


  return (
    <div className="absolute ml-5 left-full">
      <CirclePicker
        color={snap.color}
        onChange={(color) => {
          state.color = color.hex;
        }}
        colors={presetColors}
      />
    </div>
  );
};

export default ColorPicker;
