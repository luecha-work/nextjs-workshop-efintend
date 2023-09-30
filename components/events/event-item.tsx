import { NextPage } from "next";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

import classec from "./event-item.module.css";

const EventItem: NextPage<any> = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classec.item}>
      <img src={"/" + image} alt={title} />
      <div className={classec.content}>
        <div className={classec.summary}>
          <h2>{title}</h2>
          <div className={classec.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classec.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classec.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classec.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
