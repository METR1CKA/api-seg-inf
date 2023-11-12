# WS API FOR CHAT

### Requirements

- NVM (Node Version Manager) or only node
- The version node includes in the [`.nvmrc`](./.nvmrc) file

### Run project

1. Create `.env` file with `.env.example` file

```ts
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=C1DGvT8xuyiCVDBWBJkvstYeblA9ZDgF
DRIVE_DISK=local
DB_CONNECTION=pg
PG_HOST=127.0.0.1
PG_PORT=5432
PG_USER=lucid
PG_PASSWORD=
PG_DB_NAME=lucid
```

2. Install dependencies in dev

```console
$ npm i
```

3. Run in dev

```console
$ npm run dev
```
