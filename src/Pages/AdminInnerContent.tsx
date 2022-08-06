import { Outlet } from "react-router-dom";

const AdminInnerContent = () => {
  return (
    <div className="inner-content">
      <Outlet />
    </div>
  );
};

export default AdminInnerContent;
