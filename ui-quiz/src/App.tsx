import { PortalRoot } from "./components/portals";
import AppRouter from "./routers/AppRouter";
import UserTokenLoader from "./components/loaders/UserTokenLoader";

const App = () => {
  return (
    <UserTokenLoader>
      <PortalRoot />
      <AppRouter />
    </UserTokenLoader>
  );
};

export default App;
