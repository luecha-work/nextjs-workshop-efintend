import { NextPage } from "next";
import Link from "next/link";

import classec from "./main-header.module.css";

const MainHeader: NextPage<any> = () => {
  return (
    <header className={classec.header}>
      <div className={classec.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classec.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
