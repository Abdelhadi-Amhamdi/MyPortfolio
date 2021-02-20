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
          <a href="#intro">{aside.num1}</a>
        </li>
        <li onClick={btnclick}>
          <a href="#skills">{aside.num2}</a>
        </li>
        <li onClick={btnclick}>
          <a href="#works">{aside.num3}</a>
        </li>
        <li onClick={btnclick}>
          <a href="#contact">{aside.num4}</a>
        </li>
      </ul>
    </>
  );
};

export default Aside;
