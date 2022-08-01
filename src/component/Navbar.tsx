import { useState } from "react";
import { createStyles, Navbar, Group, Code } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import {
  Settings,
  SwitchHorizontal,
  Logout,
  ChartPie,
  Users,
  Database,
  UserCircle,
} from "tabler-icons-react";
//import { MantineLogo } from '../../shared/MantineLogo';
import LogoImage from "./logo_image";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
const data1 = [
  {
    link: "datasets",
    label: "Datasets",
    active_label: "dashboard/datasets",
    icon: Database,
  },
  {
    link: "manageDeos",
    label: "Manage DEOs",
    active_label: "dashboard/manageDeos",
    icon: Users,
  },
  {
    link: "reports",
    label: "Reports",
    active_label: "dashboard/reports/home",
    icon: ChartPie,
  },
  {
    link: "setting",
    label: "Other Settings",
    active_label: "dashboard/setting",
    icon: Settings,
  },
];

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    loggedspan: {
      color: theme.colors.gray,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      marginTop: "2px",
      marginBottom: "2px",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.lightWhiteTextColor,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,

      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        borderLeftWidth: "3px",
        borderLeftColor: theme.colors.secondaryColor,

        [`& .${icon}`]: {
          color:
            theme.colorScheme === "dark"
              ? theme.white
              : theme.colors.secondaryColor,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color:
            theme.colorScheme === "dark"
              ? theme.white
              : theme.colors.secondaryColor,
        },
      },
    },
  };
});

export function NavbarSimple() {
  const PathLocation = window.location.pathname.slice(1);

  localStorage.setItem("Url", PathLocation);

  const { classes, cx } = useStyles();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(PathLocation);
  }, []);

  const theme = useMantineTheme();
  const { logout } = useAuth();
  const links = data1.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.active_label == PathLocation,
      })}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        event.stopPropagation();
        setActive(item.active_label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ));
  {
    console.log(window.innerHeight);
  }
  return (
    <Navbar
      height={window.innerHeight}
      width={{ sm: 300 }}
      p="md"
      sx={{ backgroundColor: theme.colors.lightDark }}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <LogoImage />
          <Code sx={{ fontWeight: 700,color:'#BC8D42',fontSize:14 }}>OPs v1.0</Code>
        </Group>
        {links}
      </Navbar.Section>
      <div className="text-sm text-offwhite">
        You are loggedin as a <span className="text-Secondary">DEV</span>
      </div>
      <Navbar.Section className={classes.footer}>
        <Group position="center">
          <a
            href="#"
            className={classes.link}
            // onClick={(event) => event.preventDefault()}
          >
            <SwitchHorizontal className={classes.linkIcon} />
          </a>
          <Link
            to="profile"
            className={cx(classes.link, {
              [classes.linkActive]: "dashboard/profile" === PathLocation,
            })}
          >
            <UserCircle className={classes.linkIcon} />
          </Link>

          <span className={classes.link} onClick={logout}>
            <Logout className={classes.linkIcon} />
          </span>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}
