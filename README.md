# Test API

### Running Locally

1. Clone this repository.

2. Run `yarn` to install all dependencies.

3. Setup environment variables:  
   copy the contents of .env.sample into a new file called '.env'

4. Run `docker compose up -d` to start the database container

5. Run `yarn prisma migrate deploy` to apply all migrations

6. Run `yarn prisma db seed` to seed some sample data into the database

7. Run `yarn build` to build the project

8. Run `yarn start:prod` to start the API.
