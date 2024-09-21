import express from "express";
import router from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import 'dotenv/config'
const app = express();

// middleware
app.use(express.static('./public'))
app.use(express.json());

// routes
app.use("/api/v1/tasks", router);

// app.get('/api/v1/tasks')        - get all the tasks
// app.post('/api/v1/tasks')       - create a new task
// app.get('api/v1/tasks/:id')     - get single task
// app.patch('api/v1/tasks/:id')   - update task
// app.delete('api/v1/tasks/:id')  - delete task

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`server is running on ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
