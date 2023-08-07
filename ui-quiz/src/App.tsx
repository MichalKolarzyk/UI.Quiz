import { PortalRoot } from "./components/portals";
import AppRouter from "./routers/AppRouter";
import UserTokenLoader from "./components/loaders/UserTokenLoader";
import Notifications from "./compoundComponents/Notifications";
import Prompt from "./compoundComponents/Prompt";

const App = () => {
  return (
    <UserTokenLoader>
      <Notifications.Context>
        <Prompt.Context>
          <Notifications.View />
          <Prompt.View />
          <PortalRoot />
          <AppRouter />
        </Prompt.Context>
      </Notifications.Context>
    </UserTokenLoader>
  );
};

export default App;
