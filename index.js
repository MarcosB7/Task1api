const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

// Routes
const gamesRoutes = require('./routes/api/games');

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// User routes
app.use('/api/games', gamesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server run at port ${PORT}`) });



