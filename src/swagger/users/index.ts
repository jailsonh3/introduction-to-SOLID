const users = {
  post: {
    tags: ["Users"],
    summary: "Create a user",
    description: "Create a new user",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              email: {
                type: "string",
              },
            },
            example: {
              name: "John Carter",
              email: "carter.john@exemplo.com",
            },
          },
        },
      },
    },
    responses: {
      "201": {
        description: "Created",
      },
      "400": {
        description: "User already exist!",
      },
    },
  },
  get: {
    tags: ["Users"],
    summary: "List all users",
    description: "List all users",
    parameters: [
      {
        name: "user_id",
        in: "header",
        description: "ID do usuário",
        required: true,
      },
    ],
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                  },
                  name: {
                    type: "string",
                  },
                  email: {
                    type: "string",
                  },
                  admin: {
                    type: "boolean",
                  },
                },
              },
            },
          },
        },
      },
      "400": {
        description: "Error: Bad Request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "message of error",
                },
              },
            },
          },
        },
      },
    },
  },
};

const users_id_admin = {
  patch: {
    tags: ["Users"],
    summary: "Alterar o status do user para admin",
    description: "Alterar o status do user para admin",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "ID do usuário",
        required: true,
      },
    ],
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                },
                name: {
                  type: "string",
                },
                email: {
                  type: "string",
                },
                admin: {
                  type: "boolean",
                },
              },
            },
          },
        },
      },
      "400": {
        description: "Error: Bad Request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
};

const users_id = {
  get: {
    tags: ["Users"],
    summary: "search users for id",
    description: "search users for id",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "ID do usuário",
        required: true,
      },
    ],
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                },
                name: {
                  type: "string",
                },
                email: {
                  type: "string",
                },
                admin: {
                  type: "boolean",
                },
              },
            },
          },
        },
      },
      "400": {
        description: "Error: Bad Request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "message of error",
                },
              },
            },
          },
        },
      },
    },
  },
};

export { users, users_id_admin, users_id };
