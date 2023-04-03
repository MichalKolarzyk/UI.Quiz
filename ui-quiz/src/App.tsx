import { PortalRoot } from "./components/portals";
import AppRouter from "./routers/AppRouter";
import UserTokenLoader from "./components/loaders/UserTokenLoader";
import { NotificationContainer } from "./notifications";

const App = () => {
  return (
    <UserTokenLoader>
      <NotificationContainer/>
      <PortalRoot />
      <AppRouter />
    </UserTokenLoader>
  );
};

export default App;
