const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',  
    }],
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;