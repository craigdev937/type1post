import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test123",
    password: "test456",
    database: "test123test456",
    synchronize: true,
    logging: true,
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: ["src/subscribers/**/*.ts"]
});



