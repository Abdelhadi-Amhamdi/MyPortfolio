import React from "react";
import { aside } from "../context";
import useSound from "use-sound";
import Click from "../../assets/btn_click.wav";

const Aside = () => {
  const [btnclick] = useSound(Click);

  return (
    <>
      <ul className="list-aside">
        <li onClick={btnclick}>
          About
        </li>
        <li onClick={btnclick}>
          {aside.num1}
        </li>
        <li onClick={btnclick}>
          {aside.num2}
        </li>
        <li onClick={btnclick}>
          {aside.num3}
        </li>
        <li onClick={btnclick}>
          {aside.num4}
        </li>
      </ul>
    </>
  );
};

export default Aside;
