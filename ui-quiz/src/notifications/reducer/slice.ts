import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppNotification, AppNotificationType } from "..";

export interface NotificationState {
  notifications: Array<AppNotification>;
}

const initialState: NotificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  initialState,
  name: "notifications",
  reducers: {
    addNotification: (state, action: PayloadAction<AppNotification>) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      state.notifications.splice(action.payload, 1);
    },
  },
});

export const { addNotification, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
