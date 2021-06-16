const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Enter a exercise type"
        },
        name: {
            type: String,
            required: "Enter a excercise name"
        },
        duration: {
            
            type: Number

        },
        weight:{
            type: Number

        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        },

    }
    ],

    day: {
    type: Date,
    default: Date.now
}
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
