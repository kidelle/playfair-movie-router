console.log('Hello Playfair');

$(document).ready(onReady);

function onReady() {

    getAllMovies();

   
    // we don't wait for the server to respond before moving on
    // to run this next line of code, we just to the requesting
    console.log('down here...');

    $('#add-movie').on('click', handleAddMovie);
}

function handleAddMovie(event){
    event.preventDefault();
    console.log('in handleAddMovie');
    
    // Get info from input fields
    let name = $('#in-name').val();
    let movie = $('#in-movie').val();

    $.ajax({
        method: 'POST',
        url: '/movies',
        data: {
            name: name,
            movie: movie
        }
    })
    .then( function (response) {
       // POST (add movie) was good
       // 1) Clear out input fields on form
       $('#in-name').val('');
       $('#in-movie').val('');
       
       // 2) Get all my movies again, so the new one shows
       // the page
        getAllMovies();
    })
    .catch( function (error) {
        console.log(`Something bad happened...`);
        alert('Something bad happened. Try again later.');

    })
}
    // This will add all our movies to the DOM
    function renderMovies(movieList) {
        $('#movies').empty();
        for ( let item of movieList ) {
            $('#movies').append(` <tr>
                <td>${item.name}</td>
                <td>${item.movie}</td>
            </tr>`);
           
        }

    }

    function getAllMovies() {
        // ajax is asynchronus $.ajax returns a Promise
        // that says when the server responds we 
        // call the function in the `then`
        $.ajax({
            method: 'GET',
            url: '/movies'
        }).then(function (response) {
            console.log(`Got some movies!!!`, response);
            renderMovies(response);
        })
            .catch(function (error) {
                console.log(`Something bad happened...`);
                alert('Something bad happened. Try again later.');
            })
    }
