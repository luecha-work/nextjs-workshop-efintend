import { NextPage } from "next";
import classes from "./event-content.module.css";

const EventContent: NextPage<any> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
