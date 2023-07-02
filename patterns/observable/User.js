import NotificationService from "./Notification";

class User {
  /**
   * Cria uma nova instância da classe User.
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.receiveNotification = (message) => {
      console.log(
        `[${this.name}] esta ativo e recebendo as notificação: ${message}`
      );
    };
  }

  /**
   * Permite que o usuário se inscreva para receber notificações do serviço de notificações. A função receiveNotification do usuário será registrada como observador.
   */
  subscribeToNotifications() {
    NotificationService.subscribe(this.receiveNotification);
  }

  /**
   * Cancela a inscrição do usuário para não receber mais notificações do serviço de notificações. A função receiveNotification do usuário será removida como observador
   */
  unsubscribeFromNotifications() {
    NotificationService.unsubscribe(this.receiveNotification);
  }
}

export default User;
