const { Response } = require('./../../utils')
const { AggregateMoodSchema } = require('../../models')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const addMood = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    try {
        await mongoose.connect()
        let { mood } = JSON.parse(event.body)
        const foundMood = await AggregateMoodSchema.findOne({ mood })
        if (foundMood)
            return Response(409, {
                message: 'This aggregate mood has already been added.'
            })
        if (foundMood.includes(' '))
            return Response(400, {
                message:
                    'Aggregate mood should not contain a space. Use _ instead of a space.'
            })
        const addedMood = await new AggregateMoodSchema({ mood }).save()
        return Response(200, {
            message: 'Successfully added aggregate mood.',
            mood: addedMood
        })
    } catch (e) {
        console.log(e)
        return Response(e.statusCode || 500, {
            message: 'Error adding aggregate mood'
        })
    }
}

const getAllMoods = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    try {
        await mongoose.connect()
        const moods = await AggregateMoodSchema.find({})
        if (moods && moods.length === 0)
            return Response(404, {
                message: 'NO moods have been added.',
                moods
            })
        return Response(200, {
            message: 'Successfully added aggregate mood.',
            moods
        })
    } catch (e) {
        console.log(e)
        return Response(e.statusCode || 500, {
            message: 'Error adding aggregate mood'
        })
    }
}

module.exports = {
    addMood,
    getAllMoods
}
