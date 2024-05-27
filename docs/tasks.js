module.exports = {
  paths: {
    "/create": {
      post: {
        tags: ["Tasks"],
        description: "Create a task",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Task created",
          },
        },
      },
    },

    "/": {
      get: {
        tags: ["Tasks"],
        description: "Get all tasks",
        responses: {
          200: {
            description: "List of tasks",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/id/{_id}": {
      put: {
        tags: ["Tasks"],
        description: "Update the title of a task",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            description: "Task ID",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Task updated",
          },
        },
      },
      delete: {
        tags: ["Tasks"],
        description: "Delete a task",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            description: "Task ID",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Task deleted",
          },
        },
      },
    },
  },
};
