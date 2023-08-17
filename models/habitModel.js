const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitsSchema = new Schema(
    {
        content: { type: String, required: true },
        
        dates: [{
            date: String,
            complete: String
        }],
    },
    { timestamps: true });
module.exports = mongoose.model('Habit', habitsSchema);