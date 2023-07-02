# Projeto de Notificações

Este é um projeto simples de estudo que demonstra a aplicação do design pattern `Observer` para implementar um sistema de notificações. O padrão Observer é utilizado para estabelecer uma comunicação assíncrona entre objetos, onde um objeto chamado de "sujeito" (ou "observable") notifica outros objetos chamados de "observadores" quando ocorrem alterações em seu estado.

## Funcionalidade

O projeto consiste em três principais classes:

- `Observable`: Classe base que implementa o padrão Observer. Ela mantém uma lista de observadores registrados e fornece métodos para permitir que outros objetos se inscrevam, cancelem a inscrição e sejam notificados de eventos.

- `NotificationService`: Classe que estende Observable e representa um serviço de notificações. Ela possui um método sendNotification que permite enviar notificações para todos os observadores registrados.

- `User`: Classe que representa um usuário. Cada usuário pode se inscrever e cancelar a inscrição para receber notificações do NotificationService. A classe User possui um método receiveNotification que processa as notificações recebidas.
