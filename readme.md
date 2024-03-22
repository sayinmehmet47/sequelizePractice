# Sequelize Learn

This is a project to learn and demonstrate the usage of Sequelize, a promise-based Node.js ORM for Postgres.

## Project Structure

- `models/`: This directory contains the Sequelize models for the application.
- `migrations/`: This directory contains the Sequelize migrations.
- `index.js`: This is the entry point of the application.
- `db.js`: This file sets up the Sequelize connection to the database.
- `user.js`: This file contains queries related to the User model.
- `captainShip.js`: This file contains queries related to the Captain and Ship models.
- `package.json`: This file contains the list of project dependencies and scripts.
- `docker-compose.yml`: This file contains Docker Compose configuration for running the application with Docker.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the application with `npm start`.

## Docker Compose

The Docker Compose file sets up two services: `adminer` and `db`.

- `adminer`: This service uses the `adminer` image, which provides a web interface for managing databases. It restarts automatically if it stops, and it's accessible on port 8080 of your machine.

- `db`: This service uses the `postgres` image, which runs a PostgreSQL database. It also restarts automatically if it stops. The environment variable `POSTGRES_PASSWORD` is set to `test`, which sets the password for the PostgreSQL user. The database is accessible on port 5432 of your machine.

To start the services, run `docker-compose up`.

## Scripts

- `npm start`: Starts the application.
- `npm run migrate:up`: Runs the Sequelize migrations.
- `npm run migrate:undo`: Undoes the last Sequelize migration.

## Database

This application uses a PostgreSQL database. The connection is configured in `db.js`.

## Models

This application has the following models:

- `User`: Represents a user in the application. Defined in `models/user.js`.
- `Captain`: Represents a captain. Defined in `models/captain.js`.
- `Ship`: Represents a ship. Defined in `models/ship.js`.
- `File`: Represents a file. Defined in `models/file.js`.

## Associations

The associations between models are defined in `models/index.js`.

## Queries

Queries related to the User model are in `user.js`. Queries related to the Captain and Ship models are in `captainShip.js`.

## Migrations

Migrations are located in the `migrations/` directory and can be run with the `npm run migrate:up` script.

## Environment

This application uses the `NODE_ENV` environment variable to determine the environment. It defaults to 'development' if `NODE_ENV` is not set.
