import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const UserProfileView = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <div>{user?.userName ?? "Not loaded yet"}</div>
      <div>{user?.id ?? "Not loaded yet"}</div>
      <div>{user?.accountId ?? "Not loaded yet"}</div>
    </div>
  );
};


export default UserProfileView;
