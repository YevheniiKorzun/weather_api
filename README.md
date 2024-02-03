## Description
Within the scope of the test task, an application has been developed using Nest.js that fetches weather data from the OpenWeatherMap API and stores it in a PostgreSQL database.

## Running the app

```bash
$ npm run bootstrap
```

## Post endpoint

```bash

$ http://localhost:3001/wether

```

```bash
#body:
$ { lon: number, lat: number }

```

## Get endpoint

```bash

$ http://localhost:3001/wether?lon={lon}&lat={lat}

```

## Stack:
- Nest
- PostgreSQL
- TypeORM
- Docker