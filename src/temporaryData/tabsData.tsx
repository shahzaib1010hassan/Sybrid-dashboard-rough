import { Settings, ChartPie, Users, Database } from "tabler-icons-react";
import getUserProfileData from "../utils/userProfileData";
import { useAuth } from "../context/authContext";
import profiledata from "./profiledata.json"


const TabsData=() =>{
  const tabDataAdmin = [
    {
      link: "admin/datasets",
      label: "Datasets",
      active_label: "dashboard/admin/datasets",
      icon: Database,
    },
    {
      link: "admin/manageDeos",
      label: "Manage DEOs",
      active_label: "dashboard/admin/manageDeos",
      icon: Users,
    },
    {
      link: "admin/reports/home",
      label: "Reports",
      active_label: "dashboard/admin/reports/home",
      icon: ChartPie,
    },
    {
      link: "admin/setting",
      label: "Other Settings",
      active_label: "dashboard/admin/setting",
      icon: Settings,
    },
  ];
  const tabDataDeveloper = [
    {
      link: "developer/datasets",
      label: "Datasets",
      active_label: "dashboard/developer/datasets",
      icon: Database,
    },
    {
      link: "developer/reports",
      label: "Reports",
      active_label: "dashboard/developer/reports/home",
      icon: ChartPie,
    },
    {
      link: "developer/setting",
      label: "Other Settings",
      active_label: "dashboard/developer/setting",
      icon: Settings,
    },
  ];
  const myRole=profiledata.find(
    (user) => user.access_token === localStorage.getItem("accesstoken")
  );
  if (myRole?.userDetails.usr_role === "developer") {
    console.log("I am sending Developer Data");
    return tabDataDeveloper;
  } else if (myRole?.userDetails.usr_role === "admin") {
    console.log("I am sending Admin Data");
    return tabDataAdmin;
  }
}

export default TabsData;
