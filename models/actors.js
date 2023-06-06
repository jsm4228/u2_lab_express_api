//package to create the Plant model
const { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        alive: { type: Boolean, required: true },
    },
    { timestamps: true }
)

module.exports = actorSchema
