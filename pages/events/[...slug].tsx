import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";

const FilteredEventsPage: NextPage<any> = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYears = +filterYear;
  const numMonths = +filterMonth;

  if (
    isNaN(numYears) ||
    isNaN(numMonths) ||
    numYears > 2030 ||
    numYears < 2021 ||
    numMonths < 1 ||
    numMonths > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvent = getFilteredEvents({ year: numYears, month: numMonths });

  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYears, numMonths - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvent} />
    </Fragment>
  );
};

export default FilteredEventsPage;
