const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    homeTeam: {
        id: Number,
        name: String,
        logo: String
    },
    awayTeam: {
        id: Number,
        name: String,
        logo: String
    },
    homeGoals: Number,
    awayGoals: Number,
    date: {
        type: Date,
        default: Date.now
    },
    tournament: {
        name: String,
        description: String,
        color: String,
        tournamentType: Number,
        group: Number,
    },
})

module.exports = mongoose.model('Games', GamesSchema)