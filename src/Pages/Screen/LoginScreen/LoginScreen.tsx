import { Paper, createStyles, Checkbox, Title, Text } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import LogoImage from "../../Compnent/logo_image";

import { useState } from "react";
import { useAuth } from "../../ContextApi/authContext";
const { innerWidth: width, innerHeight: height } = window;

export default function AuthenticationImage(props: any) {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const { login } = useAuth();
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <div className="grid place-items-center">
          <LogoImage />
        </div>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="sm"
          mb={50}
        >
          Welcome back to <span className="text-Secondary ">Concave AGRI!</span>
        </Title>

        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border-none outline-0 border-gray-300 text-gray-900 text-sm rounded-md focus:border-0.5 focus:border-inherit focus:ring-blue-500 focus:border-Secondary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md"
            placeholder="hello@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            value={getEmail}
          />
        </div>

        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>
          <input
            type="password"
            id="input-group-1"
            className="bg-gray-50 border border-hidden outline-0 border-gray-300 shadow-md text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            value={getPassword}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <Checkbox
          label="Keep me logged in"
          mt="xl"
          size="sm"
          radius={6}
          color="teal"
        />

        <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-Secondary rounded-md shadow-lg group mt-12 w-48 mb-6">
          <span
            onClick={() => login(getEmail, getPassword)}
            className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-Secondary group-hover:translate-x-0 ease"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-Secondary transition-all duration-300 transform group-hover:translate-x-full ease">
            Login
          </span>
          <span className="relative invisible">Login</span>
        </div>

        <Text align="center" mt="md">
          Don&apos;t have an account?
          <Link to="#">
            <span className="text-Secondary font-bold hover:underline hover:underline-offset-1">
              Register
            </span>
          </Link>
        </Text>
      </Paper>
    </div>
  );
}
const useStyles = createStyles((theme) => ({
  password: {},
  wrapper: {
    minHeight: height,
    backgroundSize: "cover",
    backgroundImage: "url(https://wallpaperaccess.com/full/137495.jpg)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: height,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
