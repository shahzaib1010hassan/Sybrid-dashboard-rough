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
  User,
  UserCircle,
} from "tabler-icons-react";
import { Text } from "@mantine/core";
//import { MantineLogo } from '../../shared/MantineLogo';
import LogoImage from "./logo_image";
import TableScrollArea from "./Table";
import data from "../../TemData/Tabledata";

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
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },
  };
});

const data1 = [
  { link: "/Datasets", label: "Datasets", icon: Database },
  { link: "/ManageDeos", label: "Manage DEOs", icon: Users },
  { link: "/Reports", label: "Reports", icon: ChartPie },
  { link: "/Setting", label: "Other Settings", icon: Settings },
];

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");
  const theme = useMantineTheme();
  const links = data1.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        event.stopPropagation();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar
      height={700}
      width={{ sm: 300 }}
      p="md"
      sx={{ backgroundColor: theme.colors.lightDark }}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <LogoImage />
          <Code sx={{ fontWeight: 700, marginLeft: 14 }}>OPs v1.0</Code>
        </Group>
        {links}
      </Navbar.Section>
      <div className="text-sm text-offwhite">
        You are loggedin as a <span className="text-Secondary">DEV</span>
      </div>
      <Navbar.Section className={classes.footer}>
        <Group position="center">
          <a
            href="https://bobbyhadz.com/blog/react-type-jsx-element-not-assignable-type-functioncomponent"
            className={classes.link}
            // onClick={(event) => event.preventDefault()}
          >
            <SwitchHorizontal className={classes.linkIcon} />
          </a>
          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <UserCircle className={classes.linkIcon} />
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <Logout className={classes.linkIcon} />
          </a>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}
