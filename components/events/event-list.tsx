import { NextPage } from "next";
import EventItem from "./event-item";

import classec from "./event-list.module.css";
import EventItenInterface from "./interface/event-iten-interface";

const EventList: NextPage<any> = (props) => {
  const { items } = props;
  return (
    <ul className={classec.list}>
      {items.map((event: EventItenInterface) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
