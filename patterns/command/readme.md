# Projeto de Exemplo - Padrão Command

Este é um projeto de exemplo que demonstra o uso do padrão Command em JavaScript. O padrão Command é um padrão de design comportamental que encapsula uma solicitação como um objeto, permitindo que você parametrize os clientes com diferentes solicitações, enfileire ou registre solicitações e implemente operações reversíveis.

## Descrição do Projeto

O projeto consiste em um aplicativo de lista de tarefas, onde cada tarefa pode ser adicionada, concluída, removida ou ter sua descrição atualizada. Cada operação é implementada como um comando separado, seguindo o padrão Command.

O aplicativo utiliza JavaScript e é dividido em vários arquivos para separar as responsabilidades e seguir as melhores práticas de organização de código.

## Funcionalidades

O aplicativo oferece as seguintes funcionalidades:

- Adicionar uma tarefa à lista de tarefas.
- Concluir uma tarefa.
- Remover uma tarefa da lista.
- Atualizar a descrição de uma tarefa existente.
- Desfazer a última ação realizada.
- Refazer a última ação desfeita.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `task.js`: Define a classe `Task` para representar uma tarefa.
- `command.js`: Define a classe `Command` base para os comandos.
- `addTaskCommand.js`: Define o comando `AddTaskCommand` para adicionar uma tarefa à lista.
- `completeTaskCommand.js`: Define o comando `CompleteTaskCommand` para concluir uma tarefa.
- `removeTaskCommand.js`: Define o comando `RemoveTaskCommand` para remover uma tarefa da lista.
- `updateTaskCommand.js`: Define o comando `updateTaskCommand` para atualizar a descrição de uma tarefa.
- `index.js`: Arquivo principal do aplicativo, onde as tarefas são manipuladas usando os comandos.
