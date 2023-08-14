import { AppNotification, AppNotificationType } from "./types";
import classes from "./Notification.module.scss";
import { TertiaryButton } from "../../components/buttons";
import { Colors } from "../../scss/colors/types";
import { IconComponents } from "../../components/icons";

export const NotificationBlock = (props: NotificationProps) => {
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
      <TertiaryButton color={Colors.white} icon={IconComponents.Close} onClick={props.onDelete}/>
    </div>
  );
};

export interface NotificationProps {
  appnotification: AppNotification;
  onDelete: () => void;
}
