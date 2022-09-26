import React from "react";
import { SearchBox } from "./search-box";
import Sidebar from "./sidebar";

export const InboxPeople = () => {
  return (
    <>
      <div className="inbox_people">
        <SearchBox />
        <Sidebar />
      </div>
    </>
  );
};
