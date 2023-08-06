import { useState } from "react";
import { INotificationState } from "./NotificationContext";
import { AppNotification, AppNotificationType } from "./types";

const NotificationProvider = () : INotificationState => {
    const [notifications, setNotifications] = useState<Array<AppNotification>>([]);

    const addNotification = (notification: AppNotification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    }
  
    const removeNotification = (index: number) => {
      setNotifications((prevNotifications) => {
        const updatedNotifications = [...prevNotifications];
        updatedNotifications.splice(index, 1);
        return updatedNotifications;
      });
    }

    const add = (notification: AppNotification) => {
        addNotification(notification);
        setTimeout(() => {
          removeNotification(0);
        }, 5000);
      };
    
      const addInfo = (message: string) => {
        return add({message, type: AppNotificationType.correct})
      } 
    
      const addError = (message: string) => {
        return add({message, type: AppNotificationType.error})
      } 


    return {
        notifications,
        addInfo,
        addError,
        removeNotification,
    }
}

export default NotificationProvider;