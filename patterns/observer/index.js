import NotificationService from "./Notification";
import User from "./User";

const user1 = new User("Usuário 1");
const user2 = new User("Usuário 2");

user1.subscribeToNotifications();
user2.subscribeToNotifications();

NotificationService.sendNotification("Iniciando as notificações...");

user1.unsubscribeFromNotifications();

NotificationService.sendNotification(
  "Apenas o usuário 2 deve receber essa notificação"
);
