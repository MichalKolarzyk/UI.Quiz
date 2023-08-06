import { useContext } from "react";
import NotificationContext from "./NotificationContext";

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  
  return {
    addInfo: context.addInfo,
    addError: context.addError,
  };
};
