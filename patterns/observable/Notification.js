import Observable from "./Observable";

class NotificationService extends Observable {
  /**
   * Envia uma notificação aos observadores registrados, fornecendo uma mensagem específica.
   * @param {string} message A mensagem da notificação a ser enviada aos observadores.
   */
  sendNotification(message) {
    this.notify(message);
  }
}

export default new NotificationService();
