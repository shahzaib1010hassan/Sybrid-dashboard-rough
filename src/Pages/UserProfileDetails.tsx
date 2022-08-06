import { createStyles } from "@mantine/core";
import { useEffect, useState } from "react";
import getUserProfileData from "../utils/userProfileData";
const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export default function UserInfoIcons() {
  const [user, setUser] = useState(getUserProfileData);

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-center">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto lg:mx-12 my-32 lg:my-0 ">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto lg:mx-12 -mt-16 h-48 w-48 bg-cover bg-center bg-black)"></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">
              {user?.userDetails.usr_fname}
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              {user?.userDetails.usr_profession}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              {"Sybrid Private Limited"}
            </p>
            <p className="pt-8 text-sm">{user?.userDetails.usr_description}</p>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto  items-center justify-between">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 fill-current W-8 text-gray-600 hover:text-green-700 my-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="0.1"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="my-4 mx-4 font-medium text-gray-600 hover:text-green-700 text-lg">
                  {user?.userDetails.usr_email}
                </p>
              </div>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 fill-current W-8 text-gray-600 hover:text-green-700 my-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="0.1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <p className=" my-4 mx-4 font-medium text-gray-600 hover:text-green-700 text-lg">
                  {user?.userDetails.usr_phonenumber}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src={user?.userDetails.usr_profileImage}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
