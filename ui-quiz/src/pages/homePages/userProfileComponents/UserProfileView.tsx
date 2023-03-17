import useUserActions from "../../../actions/useUserActions";

const UserProfileView = () => {
  const userActions = useUserActions();

  return (
    <div>
      <div>{userActions?.user?.userName ?? "Not loaded yet"}</div>
      <div>{userActions?.user?.id ?? "Not loaded yet"}</div>
      <div>{userActions?.user?.accountId ?? "Not loaded yet"}</div>
    </div>
  );
};


export default UserProfileView;
