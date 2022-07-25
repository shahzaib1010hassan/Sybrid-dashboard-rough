import React from "react";
import { Outlet, Link } from "react-router-dom";
function ReportScreen() {
  return (
    <div>
      <div >
        <div >
          <ul className="flex flex-row">
            <li className="m-8 bg-bermuda p-2 rounded-md text-lightGrey shadow-lg">
              <Link to="/Reports/Home">Home</Link>
            </li>
            <li className="m-8 bg-bermuda p-2 rounded-md text-lightGrey shadow-lg">
              <Link to="/Reports/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default ReportScreen;
