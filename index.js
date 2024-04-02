// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

 function  destructivelyPrependCat(Bob)  {
    cats.unshift(Bob)
 }

 function  destructivelyRemoveLastCat()  {
    cats.pop()
 }

 function  destructivelyRemoveFirstCat()  {
    cats.shift()
 }

 function appendCat(Broom) {
    const newCatsArray = [...cats, Broom]
    return newCatsArray;
}
const newCatsArray = appendCat(Broom)

function prependCat(Arnold)  {
    const newCats = [Arnold, ...cats]
    return newCats;
}
const newCats = prependCat(Arnold)

function removeLastCat() {
    const newCatsArrays = cats.slice(0, -1);
    return newCatsArrays;
}
const newCatsArrays = removeLastCat();

function  removeFirstCat()  {
    const newCat = cats.slice(1)
    return newCat;
}
const newcat = removeFirstCat();