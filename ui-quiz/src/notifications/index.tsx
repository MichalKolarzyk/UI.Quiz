import classes from "./Notification.module.scss";
import NotificationContext from "./NotificationContext";
import NotificationProvider from "./NotificationProvider";
import { NotificationBlock } from "./components";
import { useContext } from "react";


const Context = (props: any) => {
  return (
    <NotificationContext.Provider value={NotificationProvider()}>
      <div>{props.children}</div>
    </NotificationContext.Provider>
  );
}

const View = () => {
  const context = useContext(NotificationContext);

  const notificationView = context.notifications.map((n, index) => (
    <NotificationBlock appnotification={n} onDelete={() => context.removeNotification(index)} />
  ));

  return (
    <div className={classes.container}>
      <div className={classes.table}>{notificationView}</div>
    </div>
  );
};


const Notifications = {
  Context,
  View,
}

export default Notifications;