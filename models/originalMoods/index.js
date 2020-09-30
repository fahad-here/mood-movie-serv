const mongoose = require('mongoose')
const Schema = mongoose.Schema


let OrgMoodsSchema = new Schema({
    mood: {
        type: String,
        unique: true,
        required: true
    },
    parentAggregateMoodId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    parentAggregateMood: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

const OrgMoods = mongoose.model('original-moods', OrgMoodsSchema)
module.exports = OrgMoods