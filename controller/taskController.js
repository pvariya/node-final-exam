const Task = require("../models/task");
const User = require("../models/user");

const addtask = async (req, res) => {
    try {
        const { title, description, category } = req.body;
        const newTask = await Task.create({
            title,
            description,
            category,
            user: req.user.id
        });
        const user = await User.findById(req.user.id);
        user.tasks.push(newTask._id);
        await user.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

module.exports = { addtask };
