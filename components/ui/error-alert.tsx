import { NextPage } from "next";
import classes from "./error-alert.module.css";

const ErrorAlert: NextPage<any> = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
