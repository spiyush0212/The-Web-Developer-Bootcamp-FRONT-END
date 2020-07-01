var movie = [
    {
        title: "Back to the future",
        genre: "Sci-Fi",
        rating: 4.5,
        watched: "have"
    },
    {
        title: "Laagan",
        genre: "Old",
        rating: 5,
        watched: "have not"
    },
    {
        title: "Silicon Valley",
        genre: "StartUp",
        rating: 4,
        watched: "have"
    },
    {
        title: "Fight Club",
        genre: "Action",
        rating: 3.5,
        watched: "have"
    }
];

for ( var i = 0; i < movie.length; i++ ) {
    console.log("You " + movie[i].watched + " watched " + movie[i].title + " - " + movie[i].rating + " stars")
}