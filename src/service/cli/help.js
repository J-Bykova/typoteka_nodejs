'use strict';
const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run() {
    console.log(chalk.gray(TEMPLATE_HELP_COMMAND));
  }
};

const TEMPLATE_HELP_COMMAND = `
Программа запускает http-сервер и формирует файл с данными для API.

Гайд:
service.js <command>
Команды:
--version:          выводит номер версии
--help:             печатает этот текст
--generate <count>  формирует файл mocks.json
--server:           запускает http-сервер
`;
