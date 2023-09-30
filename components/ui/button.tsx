import { NextPage } from "next";
import Link from "next/link";

import classec from "./button.module.css";

const Button: NextPage<any> = (props) => {
  if (props.link) {
    return (
      <Link className={classec.btn} href={props.link}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={classec.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};
export default Button;
