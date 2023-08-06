import React from "react";
import { AppNotification } from "./types";


const NotificationContext = React.createContext<INotificationState>({
    notifications: [],
    addInfo: () => {},
    addError: () => {},
    removeNotification: () => {},
})

export default NotificationContext;

export interface INotificationState{
    notifications: Array<AppNotification>;
    addInfo : (message: string) => void;
    addError : (message: string) => void;
    removeNotification: (index: number) => void;
}