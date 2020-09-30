const mongoose = require('mongoose')
const Schema = mongoose.Schema

let GenreSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        aggregateMood: {
            type: [String]
        },
        originalMood: {
            type: [String]
        }
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    }
)

const Genre = mongoose.model('genre', GenreSchema)
module.exports = Genre
