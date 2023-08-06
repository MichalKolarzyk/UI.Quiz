import { PortalRoot } from "./components/portals";
import AppRouter from "./routers/AppRouter";
import UserTokenLoader from "./components/loaders/UserTokenLoader";
import Notifications from "./compoundComponents/Notifications";

const App = () => {
  return (
    <UserTokenLoader>
      <Notifications.Context>
        <Notifications.View />
        <PortalRoot />
        <AppRouter />
      </Notifications.Context>
    </UserTokenLoader>
  );
};

export default App;
