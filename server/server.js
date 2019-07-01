const express = require('express');

// Setup our app
const app = express();

// Setup static files
app.use( express.static( 'server/public' ) );

// When we do a POST and want to get data from a request we need help
// We need body-parser (which is installed automatically w/express)
let bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( {extended: true} ));

// COnfigure Routers
const movieROuter = ('./routers/movie.router');
app.use('/movies', movieRouter);

// Start the server listening
// do this last, after setting up routes, and all the things
const PORT = process.env.PORT || 5000;
app.listen( PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
