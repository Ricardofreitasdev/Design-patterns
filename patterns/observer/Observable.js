class Observable {
  /**
   * Cria uma nova instância da classe Observable
   */
  constructor() {
    this.observers = [];
  }

  /**
   * Registra uma função como observador, para que ela seja notificada quando ocorrer uma alteração.
   * @param {Function} func A função a ser registrada como observador.
   */
  subscribe(func) {
    this.observers.push(func);
  }

  /**
   * Remove uma função previamente registrada como observador.
   * @param {Function} func  A função a ser removida como observador.
   */
  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  /**
   * Notifica todos os observadores registrados, passando uma mensagem específica para cada um deles.
   * No método notify, observer representa cada uma das funções que se inscreveram como observadores,
   * e data é a mensagem que será passada para cada observador quando o método notify for chamado.
   *
   * @param {string} data A mensagem a ser enviada para os observadores.
   */
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default Observable;
