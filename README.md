# Сервер на NodeJS(Express)

---

## Подключение к серверу

---

_Установка nodeJS по умолчанию считается выполненной_

1. Проинициализировать Git через терминал

```
git init
```

2. Добавить необходимые библиотеки через терминал

```
npm install --save express pg nodemon
```

3. Создать в папке **backend** файл .env
4. Добавить в него код(с указанием Ваших параметров)

```
POSTGRES_PASSWORD = ...
POSTGRES_USER = ...
POSTGRES_HOST = ...
POSTGRES_PORT = ...
POSTGRES_DATABASE = ...
PORT = ...
```

5. Запустите сервер через терминал

```
npm run dev
```
