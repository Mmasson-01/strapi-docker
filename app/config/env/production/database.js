const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => {
  if (env("DATABASE_TYPE") === "mongodb") {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "mongoose",
          settings: {
            host: env("DATABASE_HOST", "mongodb"),
            srv: env.bool("DATABASE_SRV", false),
            port: env.int("DATABASE_PORT", 27017),
            database: env("DATABASE_NAME", "strapi"),
            username: env("DATABASE_USERNAME", "strapi"),
            password: env("DATABASE_PASSWORD", "password"),
          },
          options: {
            authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
            ssl: env.bool("DATABASE_SSL", false),
          },
        },
      },
    };
  } else {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password,
            ssl: {
              rejectUnauthorized: false,
            },
          },
          options: {
            ssl: true,
          },
        },
      },
    };
  }
};
