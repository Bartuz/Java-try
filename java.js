recipy = {
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