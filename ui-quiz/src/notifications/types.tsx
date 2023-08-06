export enum AppNotificationType {
  correct,
  error,
}

export interface AppNotification {
  type: AppNotificationType;
  message: string;
}
