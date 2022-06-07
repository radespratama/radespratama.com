import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import useLightSide from "@hook/useLightSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useLightSide();
  const [lightSide, setLightSide] = useState(colorTheme === "light");

  const togglerTheme = (checked) => {
    setTheme(colorTheme);
    setLightSide(checked);
  };

  return (
    <button type="button">
      <DarkModeSwitch
        checked={lightSide}
        onChange={togglerTheme}
        className="h-6 w-6 cursor-silence"
        color={lightSide ? "black" : "white"}
        moonColor={lightSide ? "black" : "white"}
        sunColor={lightSide ? "black" : "white"}
      />
    </button>
  );
}
