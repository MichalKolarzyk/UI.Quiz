import { INotificationState } from "./NotificationContext";
import { AppNotification, AppNotificationType } from "./types";
import useList from "../../hooks/useList";

const NotificationProvider = () : INotificationState => {
    const notifications = useList<AppNotification>([]);

    const add = (notification: AppNotification) => {
      notifications.add(notification);
        setTimeout(() => {
          notifications.remove(0);
        }, 5000);
      };
    
      const addInfo = (message: string) => {
        return add({message, type: AppNotificationType.correct})
      } 
    
      const addError = (message: string) => {
        return add({message, type: AppNotificationType.error})
      } 


    return {
        notifications : notifications.items,
        removeNotification: notifications.remove,
        addInfo,
        addError,
    }
}

export default NotificationProvider;