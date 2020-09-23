export const development = {
  type: "pg",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "5432",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || "postgres",
  entities: ["src/app/entities/*.ts"],
  logging: true,
  synchronize: true,
};

export const production = {
  type: "pg",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "5432",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || "postgres",
  entities: ["src/app/entities/*.ts"],
  logging: true,
  synchronize: true,
};

export default { development, production };
