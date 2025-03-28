const express = require('express');
const { addtask } = require('../controller/taskController');
const authenticateToken = require('../Middleware/authenticateToken');
const admin = require('../Middleware/admin');
const Task = require('../models/task');
const taskRoute = express.Router();

taskRoute.post("/addTask", authenticateToken, addtask)
taskRoute.get('/myTasks', authenticateToken, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user._id });
        res.status(200).json({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching tasks' });
    }
});
module.exports = taskRoute;