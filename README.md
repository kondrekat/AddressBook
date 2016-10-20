# AddressBook

Автор: Кондратенко Екатерина
e-mail: kondratenko.es@gmail.com
телефон: +7-999-495-9281

Принаписании были использованы ReactJS, Material UI.
Данные сохраняются в LocalStorage.

Инструкции по установке:
Для любого из вариантов вам необходимо использовать npm.
1) Сохраните этот репозиторий.

Вариант 1 (разархивировать проект со всеми библиотеками):
2) Раскакуйте архив AddrBook (состоит из 4х томов)
3) Перейдите в корневую папку распакованного проекта AddrBook используя консоль
4) Выполните команды:
  npm run build
  npm run start
5) Просматривайте через браузер на localhost:8080

Вариант 2 (самостоятельно установить необходимые библиотеки):
2) Через консоль перейдите в корневую папку проекта
3) Выполните следующие команды:
  npm init
  npm i -S {react,react-dom}
  npm i -D babel-{core,loader,preset-es2015} babel-preset-react
  npm i -D webpack webpack-dev-server html-webpack-plugin
  npm run build
  npm run start
4) Просматривайте через браузер на localhost:8080
