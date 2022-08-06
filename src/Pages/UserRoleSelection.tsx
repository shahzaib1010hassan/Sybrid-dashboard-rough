import { createStyles, Header, Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import LogoImageBlack from "../component/logo_image_Black";
import getUserProfileData from "../utils/userProfileData";
import { useState } from "react";
import { useAuth } from "../contextApi/authContext";
import { useNavigate } from "react-router";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export default function UserRoleSelection() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [user, setUser] = useState(getUserProfileData);
  const { setCurrentUserRole } = useAuth();
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <div>
      <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120} mt={10}>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
            <LogoImageBlack />
          </Group>

          <div
            onClick={() => {
              logout();
            }}
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-Secondary text-Secondary text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-Secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-Secondary transition duration-300 group-hover:text-white ease">
              Logout
            </span>
          </div>
        </Container>
      </Header>
      <div className="flex flex-row place-content-center">
        {user?.userDetails.usr_role.map((item: any) => (
          <div
            onClick={() => {
              setCurrentUserRole(item);
              localStorage.setItem("userRole", item);
              navigate("datasets");
            }}
            className="block p-6 w-60 mx-5 bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 drop-shadow-xs hover:drop-shadow-2xl"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-Secondary dark:text-white">
              {item}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
