const mongoose = require('mongoose')
const Schema = mongoose.Schema


let AggMoodsSchema = new Schema({
    mood: {
        type: String,
        unique: true,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

const AggMoods = mongoose.model('aggregate-moods', AggMoodsSchema)
module.exports = AggMoods