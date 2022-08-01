import profiledata from "../temporaryData/profiledata.json"
const getUserProfileData = () => {
  return profiledata.find(
    (user) => user.access_token === localStorage.getItem("accesstoken")
  );
};

export default getUserProfileData;
