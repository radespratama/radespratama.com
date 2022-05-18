import useLightSide from "@hook/useLightSide";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useLightSide();
  const [lightSide, setLightSide] = useState(
    colorTheme === "light" ? true : false
  );

  const togglerTheme = (checked) => {
    setTheme(colorTheme);
    setLightSide(checked);
  };

  return (
    <button>
      <DarkModeSwitch
        checked={lightSide}
        onChange={togglerTheme}
        className="h-7 w-7"
        color={lightSide ? "black" : "white"}
        moonColor={lightSide ? "black" : "white"}
        sunColor={lightSide ? "black" : "white"}
      />
    </button>
  );
}
