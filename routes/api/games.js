const express = require('express');
const router = express.Router();
const Games = require('../../models/Games');

// @routes GET api/games
// @desc GET all games
router.get('/', async (req, res) => {
    try {
        const games = await Games.find();
        if (!games) throw Error('No games found');
        res.status(200).json(games)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @routes POST api/games
// @desc Create an game
router.post('/', async (req, res) => {
    const newGame = new Games(req.body);

    try {
        const game = await newGame.save();
        if (!game) throw Error('Error saving data')

        res.status(200).json(game)

    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

module.exports = router;