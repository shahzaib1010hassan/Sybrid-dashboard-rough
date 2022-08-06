import { Outlet } from "react-router-dom";

const DeveloperInnerContent = () => {
  return (
    <div className="inner-content">
      <Outlet />
    </div>
  );
};

export default DeveloperInnerContent;
