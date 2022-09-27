import React from "react";
import { SearchBox } from "./search-box";
import Sidebar from "./sidebar";

export const InboxPeople = () => {
  return (
    <>
      <div className="inbox_people sticky min-h-screen bg-darkest w-6/12">
        <SearchBox />
        <Sidebar />
      </div>
    </>
  );
};
