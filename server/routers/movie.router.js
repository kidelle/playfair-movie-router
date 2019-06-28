const express = require('express');

// This makes a Router oject for us to use
const router = express.Router();

// Move routes ( GET/POST ) from server.js into here
// Setup route to return movies
const movieData = require('./modules/movie.module')
router.get('/movies', (req, res) => {
    res.send(movieData);
})

router.get( '/first', (req, res) => {
    res.send(movieData[0]);
})

router.post('/movies', (req, res) => {
    // Get the movie from the request
    let newMovie = req.body;
    console.log('We are adding the movie', newMovie);
    // Add it onto the array of movies
    movieData.push(newMovie);
    // A good server always responds - 201 means Crated! (added movie)
    res.sendStatus(201);
})




module.exports = router;