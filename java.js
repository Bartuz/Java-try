var recipy = {
	title: "Cocacola",
	servings: 5,
	ingredients: ["cukier","slodkosci", "pysznosci"]
}
console.log("Tytul: " + recipy.title)
console.log("Ile?: " + recipy.servings)
console.log("Skladniki: ")
for (var i = 0; i<recipy.ingredients.length;i++){
	console.log(recipy.ingredients[i])
}

var ksiazki = [
	{
		title: "Harry potter",
		pages: 666,
		read: false,
	},
	{
		title:"gowno",
		pages: 0,
		read: true,
	}
];

for (var i = 0; i < ksiazki.length; i++) {
  var book = ksiazki[i];
  var bookInfo = book.title + '" with ' + book.pages;
  if (book.read) 
  	console.log("NO WAY!")
  else
  	console.log(bookInfo)
 } 
var myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    var starsString = 'Stars: ';
    for (var i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i != movie.stars.length -1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}

// Or...
function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It stars ' + movie.stars.join(', '));
}
printMovie(myFavMovie);
 
  