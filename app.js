//Make a function that receive age, and return what they drink.

//Rules:

//Children under 14 old.
//Teens under 18 old.
//Young under 21 old.
//Adults have 21 or more.

//Answer//

const peopleWithAgeDrink = (age) =>
    age < 14 ? "drink toddy" :
    age < 18 ? "drink coke" :
    age < 21 ? "drink beer" : "drink whisky"