import { RootState, useAppDispatch } from "../store/store";
import { addNotification, removeNotification } from "./reducer/slice";
import classes from "./Notification.module.scss";
import { DeleteButton } from "../components/buttons";
import { useSelector } from "react-redux";

export enum AppNotificationType {
  correct,
  error,
}

export interface AppNotification {
  type: AppNotificationType;
  message: string;
}

export const useNotifications = () => {
  const dispatch = useAppDispatch();
  const add = (notification: AppNotification) => {
    dispatch(addNotification(notification));
    setTimeout(() => {
      dispatch(removeNotification(0));
    }, 5000);
  };

  return { add };
};

export const NotificationContainer = () => {
  const { notifications } = useSelector((state: RootState) => state.nofifications);
  const dispatch = useAppDispatch();

  const onNotificationCloseClick = (index: number) => {
    console.log(index);
    dispatch(removeNotification(index));
  };

  const notificationView = notifications.map((n, index) => (
    <Notification appnotification={n} onDelete={() => onNotificationCloseClick(index)} />
  ));

  return (
    <div className={classes.container}>
      <div className={classes.table}>{notificationView}</div>
    </div>
  );
};

export const Notification = (props: NotificationProps) => {
  let className;
  if (props.appnotification.type == AppNotificationType.correct) {
    className = classes.correct;
  }
  if (props.appnotification.type == AppNotificationType.error) {
    className = classes.error;
  }
  return (
    <div className={`${className} ${classes.notification}`}>
      <h6>{props.appnotification.message}</h6>
      <DeleteButton onClick={props.onDelete} />
    </div>
  );
};

export interface NotificationProps {
  appnotification: AppNotification;
  onDelete: () => void;
}
