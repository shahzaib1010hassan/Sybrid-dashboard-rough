import { Routes, Route } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import DatasetsScreen from "../Pages/DatasetsScreen";
import ManageDeosScreen from "../Pages/ManageDeosScreen";
import Home from "../Pages/ReportNestedScreen/Home";
import About from "../Pages/ReportNestedScreen/About";
import SettingScreen from "../Pages/SettingScreen";
import ReportScreen from "../Pages/ReportScreen";
import UserInfoIcons from "../Pages/UserProfileDetails";
import DeveloperInnerContent from "../Pages/DeveloperInnerContent";
import { Link } from "react-router-dom";
import { Settings, ChartPie, Users, Database } from "tabler-icons-react";
import { useState } from "react";
import { createStyles, Navbar, Group, Code, Menu, Button } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { SwitchHorizontal, Logout, UserCircle } from "tabler-icons-react";
import { useHover } from "@mantine/hooks";
import { useAuth } from "../contextApi/authContext";
import { useEffect } from "react";
import LogoImage from "../component/logo_image";
import UserRoleSelection from "../Pages/UserRoleSelection";
import getUserProfileData from "../utils/userProfileData";
const Authorized = () => {
  const { CurrentUserRole } = useAuth();
  const userRolesNumber = getUserProfileData()?.userDetails.usr_role.length;
  return (
    <>{CurrentUserRole === null ? <UserRoleSelection /> : <Dashboard />}</>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-lightGrey">
      <div>{Sidebar()}</div>
      <div>{AppRoutes()}</div>
    </div>
  );
};

const AppRoutes = () => {
  const { CurrentUserRole } = useAuth();

  return (
    <>
      {CurrentUserRole === "FC" && FCRoutes()}
      {CurrentUserRole === "DES" && DESRoutes()}
      {CurrentUserRole === "DEO" && DEORoutes()}
      {CurrentUserRole === "CCM" && CCMRoutes()}
      {CurrentUserRole === "AA" && AARoutes()}
    </>
  );
};

const SidebarTabs = () => {
  const { CurrentUserRole } = useAuth();
  return (
    <>
      {CurrentUserRole === "FC" && Fc_Tabs()}
      {CurrentUserRole === "DES" && DES_Tabs()}
      {CurrentUserRole === "DEO" && DEO_Tabs()}
      {CurrentUserRole === "CCM" && CMM_Tabs()}
      {CurrentUserRole === "AA" && AA_Tabs()}
    </>
  );
};

//Main function for Sidebar Switch Tab
const SidebarSwitchTab = () => {
  const { CurrentUserRole, setCurrentUserRole } = useAuth();
  const { classes, cx } = useStyles();
  const userProfileData = getUserProfileData();
  const [user, setUser] = useState(userProfileData);
  const [opened, setOpened] = useState(false);
  const { hovered, ref } = useHover();
  const navigate = useNavigate();
  return (
    <Menu
      position="top"
      trigger="hover"
      openDelay={100}
      closeDelay={250}
      radius="md"
      transition="rotate-right"
      transitionDuration={200}
      withArrow
    >
      <Menu.Target>
        <div ref={ref}>
          {hovered ? (
            <Button
              className={cx(classes.link, {
                [classes.linkActive]: true,
              })}
            >
              <SwitchHorizontal className={classes.linkIcon}></SwitchHorizontal>
            </Button>
          ) : (
            <Button
              className={cx(classes.link, {
                [classes.linkActive]: false,
              })}
            >
              <SwitchHorizontal className={classes.linkIcon}></SwitchHorizontal>
            </Button>
          )}
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label className="text-Secondary font-semibold">
          Switch Role
        </Menu.Label>
        {user?.userDetails.usr_role.map((item: any) => (
          <Menu.Item
            className="font-semibold"
            disabled={item === CurrentUserRole}
            onClick={() => {
              setCurrentUserRole(item);
              localStorage.setItem("userRole", item);
              navigate("/");
            }}
          >
            {item}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

//Tabs for Different Roles

// 1  Tabs for Field Coordinator

const Fc_Tabs = () => {
  const PathLocation = window.location.pathname.slice(1);
  const { classes, cx } = useStyles();
  //const [Active, setActive] = useState(PathLocation);
  return (
    <div>
      {/*Datasets Tab For Field Coordinator*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "datasets",
        })}
        to={"datasets"}
        key={"Datasets"}
        onClick={(event: any) => {
          event.stopPropagation();
        }}
      >
        <Database className={classes.linkIcon} />
        <span>{"Datasets"}</span>
      </Link>

      {/*manageDeos Tab For Field Coordinator*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "manageDeos",
        })}
        to={"manageDeos"}
        key={"Manage DEOs"}
        onClick={(event: any) => {
          event.stopPropagation();
          // setActive("manageDeos");
        }}
      >
        <Users className={classes.linkIcon} />
        <span>{"Manage DEOs"}</span>
      </Link>

      {/*Reports Tab For Field Coordinator*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "reports/home",
        })}
        to={"reports/home"}
        key={"Reports"}
        onClick={(event: any) => {
          event.stopPropagation();
          // setActive("reports/home");
        }}
      >
        <ChartPie className={classes.linkIcon} />
        <span>{"Reports"}</span>
      </Link>

      {/*Setting Tab For Field Coordinator*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "setting",
        })}
        to={"setting"}
        key={"Other Settings"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive("setting");
        }}
      >
        <Settings className={classes.linkIcon} />
        <span>{"Other Settings"}</span>
      </Link>
    </div>
  );
};

// 2  Tabs for Data Entry Supervisor

const DES_Tabs = () => {
  const PathLocation = window.location.pathname.slice(1);
  const { classes, cx } = useStyles();
  return (
    <div>
      {/*Datasets Tab For data-entry-supervisor*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "datasets",
        })}
        to={"datasets"}
        key={"Datasets"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive(item.active_label);
        }}
      >
        <Database className={classes.linkIcon} />
        <span>{"Datasets"}</span>
      </Link>

      {/*Reports Tab For data-entry-supervisor*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "reports/home",
        })}
        to={"reports/home"}
        key={"Reports"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive(item.active_label);
        }}
      >
        <ChartPie className={classes.linkIcon} />
        <span>{"Reports"}</span>
      </Link>

      {/*Setting Tab For data-entry-supervisor*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "setting",
        })}
        to={"setting"}
        key={"Other Settings"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive(item.active_label);
        }}
      >
        <Settings className={classes.linkIcon} />
        <span>{"Other Settings"}</span>
      </Link>
    </div>
  );
};

// 3  Tabs for Data Entry Operator

const DEO_Tabs = () => {
  const PathLocation = window.location.pathname.slice(1);
  const { classes, cx } = useStyles();
  return (
    <div>
      {/*Datasets Tab For data-entry-supervisor*/}

      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "datasets",
        })}
        to={"datasets"}
        key={"Datasets"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive(item.active_label);
        }}
      >
        <Database className={classes.linkIcon} />
        <span>{"Datasets"}</span>
      </Link>
    </div>
  );
};

//4   Tabs for Call Center Manager

const CMM_Tabs = () => {
  const PathLocation = window.location.pathname.slice(1);
  const { classes, cx } = useStyles();
  return (
    <div>
      {/*Datasets Tab For call-center-manager*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "datasets",
        })}
        to={"datasets"}
        key={"Datasets"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive(item.active_label);
        }}
      >
        <Database className={classes.linkIcon} />
        <span>{"Datasets"}</span>
      </Link>

      {/*Setting Tab For call-center-manager*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "setting",
        })}
        to={"setting"}
        key={"Other Settings"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive(item.active_label);
        }}
      >
        <Settings className={classes.linkIcon} />
        <span>{"Other Settings"}</span>
      </Link>
    </div>
  );
};

//5   Tabs for Agri Advisor
const AA_Tabs = () => {
  const PathLocation = window.location.pathname.slice(1);
  const { classes, cx } = useStyles();
  return (
    <div>
      {/*Datasets Tab For call-center-manager*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "datasets",
        })}
        to={"datasets"}
        key={"Datasets"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive(item.active_label);
        }}
      >
        <Database className={classes.linkIcon} />
        <span>{"Datasets"}</span>
      </Link>

      {/*Setting Tab For call-center-manager*/}
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: PathLocation === "setting",
        })}
        to={"setting"}
        key={"Other Settings"}
        onClick={(event: any) => {
          event.stopPropagation();
          //setActive(item.active_label);
        }}
      >
        <Settings className={classes.linkIcon} />
        <span>{"Other Settings"}</span>
      </Link>
    </div>
  );
};

//Role-based Routing is defined here

// 1  Routes for Field Coordinator

const FCRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="datasets" />} />
      <Route path="datasets" element={<DatasetsScreen />} />
      <Route path="manageDeos" element={<ManageDeosScreen />} />
      <Route path="setting" element={<SettingScreen />} />
      <Route path="reports" element={<ReportScreen />}>
        <Route path="reports" element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="profile" element={<UserInfoIcons />} />
    </Routes>
  );
};

// 2  Routes for Data Entry Supervisor

const DESRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="datasets" />} />
      <Route path="datasets" element={<DatasetsScreen />} />
      <Route path="setting" element={<SettingScreen />} />
      <Route path="reports" element={<ReportScreen />}>
        <Route path="reports" element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="profile" element={<UserInfoIcons />} />
    </Routes>
  );
};

// 3  Routes for Data Entry Operator

const DEORoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DeveloperInnerContent />}>
        <Route path="/" element={<Navigate replace to="datasets" />} />
        <Route path="datasets" element={<DatasetsScreen />} />
        <Route path="profile" element={<UserInfoIcons />} />
      </Route>
    </Routes>
  );
};

// 4  Routes for Call Center Manager

const CCMRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DeveloperInnerContent />}>
        <Route path="/" element={<Navigate replace to="datasets" />} />
        <Route path="datasets" element={<DatasetsScreen />} />
        <Route path="setting" element={<SettingScreen />} />
        <Route path="profile" element={<UserInfoIcons />} />
      </Route>
    </Routes>
  );
};

// 5  Routes for Agri Advisor

const AARoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DeveloperInnerContent />}>
        <Route path="/" element={<Navigate replace to="datasets" />} />
        <Route path="datasets" element={<DatasetsScreen />} />
        <Route path="setting" element={<SettingScreen />} />
        <Route path="profile" element={<UserInfoIcons />} />
      </Route>
    </Routes>
  );
};

// Styling Navbar for Tabs
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
      height: 40,
      marginTop: "5px",
      marginBottom: "5px",
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
        height: 40,
        marginTop: "5px",
        marginBottom: "5px",
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
        height: 40,
        marginTop: "5px",
        marginBottom: "5px",
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
//Side bar User Interface
const Sidebar = () => {
  const PathLocation = window.location.pathname.slice(1);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("");
  const [user, setUser] = useState(getUserProfileData);
  const { CurrentUserRole } = useAuth();
  useEffect(() => {
    setActive(PathLocation);
  }, []);

  const theme = useMantineTheme();
  const { logout } = useAuth();
  const userRolesNumber = getUserProfileData()?.userDetails.usr_role.length;
  return (
    <Navbar
      // height={window.innerHeight}
      className="h-screen overflow-hidden"
      width={{ sm: 300 }}
      p="md"
      sx={{ backgroundColor: theme.colors.lightDark }}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <LogoImage />
          <Code
            sx={{
              fontWeight: 700,
              color: "#BC8D42",
              fontSize: 14,
              marginTop: -5,
            }}
          >
            OPs v1.0
          </Code>
        </Group>
        {SidebarTabs()}
      </Navbar.Section>
      <div className="text-sm text-offwhite">
        You are loggedin as a{" "}
        <span className="text-Secondary">{CurrentUserRole}</span>
      </div>
      <Navbar.Section className={classes.footer}>
        <Group position="center">
          {userRolesNumber !== 1 && <SidebarSwitchTab />}
          <Link
            to={"profile"}
            className={cx(classes.link, {
              [classes.linkActive]: "profile" === PathLocation,
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
};

export default Authorized;
