module.exports = ({ env }) => {
  if (env("NODE_ENV") === "development") {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "sqlite",
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    };
  } else {
    if (env("DATABASE") === "mongodb") {
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
              host: env("DATABASE_HOST", "postgres"),
              port: env.int("DATABASE_PORT", 27017),
              database: env("DATABASE_NAME", "the_guide"),
              username: env("DATABASE_USERNAME", "the_guide"),
              password: env("DATABASE_PASSWORD", "password"),
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
  }
};
