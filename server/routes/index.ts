import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.send(tasks);
});

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const createTask = new Task({
    title,
    description,
  });
  await createTask.save();
  res.send(createTask);
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const getTask = await Task.findById(req.params.id);
    //if (!task) return res.status(404).json({ message: "Task not found" });
    res.send(getTask);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    return res.json(deleteTask);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put("/tasks/:id", async (req, res) => {
  const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(updateTask);
});

export default router;
