const express = require("express");
const connectDB = require("./config/config");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/index");
const tasks = require("./routes/tasks");

const app = express();

connectDB();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/tasks", tasks);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
