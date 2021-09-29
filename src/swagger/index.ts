import { users, users_id_admin, users_id } from "./users";

const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "UserADM Doc",
    description: "This is an API REST",
    version: "1.0.0",
    contact: {
      email: "jlsn.developer@gmail.com",
    },
  },
  paths: {
    "/users": users,
    "/users/{id}/admin": users_id_admin,
    "/users/{id}": users_id,
  },
};

export { swaggerDoc };
